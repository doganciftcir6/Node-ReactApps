const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const workRoutes = require("./routes/workRoutes");
//cokkie oluşturmak için npm i cookie-parser paketinden faydalandık
const cookieParser = require("cookie-parser");
//token kontrolü için
const {AuthControl, KullaniciKontrol} = require("./middleware/authMiddlewear");


//express server oluştur
const app = express();


//static dosyaları programa tanıtmak ve çalıştırabilmek için middlewear
app.use(express.static("public"));

//req.body ile post bilgilerini yakalayabilmek için middlewear
app.use(express.json());

//cokkie oluşturalım bu sayede kullanıcının tarayıcısında veriler tutabilelim. Veya bunu cookie-parser paketiylede yapabiliriz. Middlewear olarak cookie oluşturabiliriz.
app.use(cookieParser());

//ejslerimi kullanabilmek için programa tanıtmam lazım, view engine oluşması için.
app.set("view engine", "ejs");

//veri tabanı bağlantısını yapalım, eğer bağlantı başarılıysa serveri dinlemeye başlasın.
const connectionString = "mongodb+srv://aos:test1234@cluster1.gbmwa6g.mongodb.net/IsTakipDB?retryWrites=true&w=majority";
mongoose.connect(connectionString, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => {
        app.listen(3000, () =>{
            console.log("Db baglantisi basarili ve server dinleniyor");
        });
    }).catch((err) => {
        console.log(err);
    });


//çalıştıracağımız sayfaları çağıralım, endpointler yani
//bunları sadece giriş yapmıs kullanici görsün istiyorum 
// * dediğimde bütün sayfalarda demiş oluyorum, böyleyece kullanıcı sayfaya giriş yaptığında tüm sayfalarda kullanıcının local user bilgisi dolmuş olur.
app.get("*", KullaniciKontrol);

app.get("/", AuthControl,(req,res) => {
    res.render("home");
});

// app.get("/works",AuthControl,(req,res) => {
//     res.render("works");
// });

//routerlarımı kullanabilmek için onları middlewear olarak tanımlamam gerekiyor.
app.use(authRoutes);
app.use(workRoutes);

//cokkie oluşturalım bu sayede kullanıcının tarayıcısında veriler tutabilelim. Veya bunu cookie-parser paketiylede yapabiliriz. Middlewear olarak cookie oluşturabiliriz.
// app.get("/set-cookie", (req,res) =>{
//     header olarak cookieyi tanımlıyor ilk parametre cookie nin namei diğeri ise valuesi oluyor.
//     res.setHeader("Set-Cookie", "yeni=true");
//     res.send("Cookie olustu");
// });
//paketi kullanarak cookieyi oluşturalım
app.get("/set-cookies", (req,res) => {
    //cookie() metodunun ilk parametresi cookienin ismi ikinci parametre ise valuesi oluyor.
    res.cookie("yeni", false);
    //ikinci cookie oluşturalım üçüncü parametrede opsiyonal olarak cookie ayarlarını ayarlayabiliriz. maxAge:  kaç saniye duracağını milisayine olarak belirleriz. Bunu 24 saat yapalım ve httpOnly:true yaptığımzıda daha güvenli bir cookie oluşturmuş oluruz.
    res.cookie("parola","12345", {maxAge: 1000*60*60*24, httpOnly:true});
    res.send("Cookie olustu");
});
//cookie oluşturma işlemini yaptık bide cookie çağırma işlemine bakalım
app.get("/get-cookies", (req,res) => {
    //gelen isteğin cookielerine ulaşmak
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
});