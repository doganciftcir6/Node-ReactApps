const express = require("express");
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
//environmenttları kullanabilmek için
const dotenv = require("dotenv");
dotenv.config();

const postRoute = require("./routes/posts");

//db bağlantısı kurmak
//environmenta ulaşarak db connectionstringi ordan çekelim.
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true, useUnifiedTopology:true}).then(() => {
    console.log("DB baglantisi basarili");
}).catch((err) => {
    console.log(err);
});

//server kuralım express ile
const app = express();

//middlwear ile body bilgisini okuyabilir hale getirmelisin.
app.use(express.json());
//middlewear ile routeu tanımla
// localhost:3000/api/user/register demiş oluruz. Bu url ile post metotu çalışmış olur.
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

//server kurma işlemleri devamı
//porta environment ile ulaşalım sabitten çekelim.
app.listen(process.env.PORT, () => {
    console.log("server calisiyor");
});