const express = require("express");
//morgen paketi ile log tutmak için require etmemiz lazım
const morgan = require("morgan");
//mongoose paketi ile veritabanına bağlanıp mongodb işlemlerini yapıcaz
//bu uri bilgisini mongodbdenn databaseimden aldım, test1234 passwordum onu girmem lazım linke ve dbname bilgimide girmem gerekiyor.
const mongoose = require("mongoose");
const dbURI = "mongodb+srv://aos:test1234@cluster1.gbmwa6g.mongodb.net/blogDB?retryWrites=true&w=majority";
//mongodb ile oluşturduğumuz ders modelini import et
const Ders = require("./models/ders");
//burdaki karışılşıktan kurtulmak için oluşturduğumuz dersRoute kullanalım. Sonrasında bir middlewear yazalım.
const dersRoutes = require("./routes/dersRoutes");




//express ile server oluşturmak için
const app = express();

//mongoose ile veritabanına bağlantı kuralım connect() metotunun ilk parametresi connectionstring, ikinci parametresi güvenli bir bağlantı kullanmak ve url dönüştürücüyü sağlamak için bir takım bilgileri burda ayarlamalyıız. Bağlantı sonrası promise yapısı oluşur.
//serveri dinleme olayını dbye bağlantı başarılıysa yapalım.
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//serveri dinleyelim, içine port numarası yazılır.
// app.listen(3000);

//istek geldiğinde cevabı
///app.get diyerek get isteği geldiğinde verilecek cevabı vs ayarlarım.
//.ejs sayfasını göstermek, ejs kullanacağımı ve viewslarımın htmls klasörümde olduğunu ayarlıyorum.
app.set("view engine", "ejs");
app.set("views", "htmls");
//artık viewlarım kullanılmaya hazır

//middlewear
app.use((req,res,next) => {
    //istek yapılan makinenin hostnameine pathine ve isteğin metotuna ulaşmak istiyorum bunu get işleminden daha önce yapmalıyız.
    //bu middlewearı burda çalıştırırsak başka sayfalara geçiş yapamıyoruz bundan kurtulmak için ise next() metotunu çalıştırıcaz.
    console.log(req.hostname,req.path,req.method);
    next();
});
//morgan middlewear ile log tutalım, parametre olarak nasıl bir logger kullanmak istediğimizi yazıyoruzş
app.use(morgan("dev"));

//css dosyamızın static olduğunu belirtelim, artık public klasörü static bir klasör ve ordaki sabit kodları uygulammız kullanacak.
app.use(express.static("public"));

//post işlemi  yapıcaz database veri göndericez ve bu database gönderilen verilerin açık olmaması gerekiyor o yüzden burda express.urlencoded() metodunu kullanarak göndereceğimiz veriyi şifrelicez. Bunuda bir middlewear ile yaparız.
app.use(express.urlencoded({extended:true}));

//bir middlewear yazalım oluşturduğumuz route kullanabilmek için. Routeu gerçekleştirmiş olalım ve burdaki fazla kodlardan karmaşılıktan böylece kurtulalım. Buraya tüm endpointler /dersler aldığı için bunu buraya yazarak route sayfasında bunu yazmaktanda kurtulabiliriz endpointlerde.
app.use("/dersler",dersRoutes);

//viewleri routelara göre render edelim.

//MONGODB İLE KAYIT EKLEME
app.get("/ders-ekle", (req,res) => {
    //önce ders modelini kullnarak bir ders oluşturmalıyız.
    const ders = new Ders({
        baslik:"NodeJS",
        icerik:"NodeJS ile uygulamalar."
    });
    //ders.save() dediğimiz zaman direkt bağlantı kurarak mongoose db ile kaydetme işlemini yapacak oluştuduğumuz dersi kaydedecek. Kaıyt Ekleme yapıyoruz yani.
    ders.save().then((sonuc) => {
        res.send(sonuc);
    }).catch((err) => {
        console.log(err);
    });
});

//MONGDOB İLE GETALL YAPMAK
app.get("/butun-dersler", (req,res) => {
    //find() metotu ile koleksiyon içindeki tüm kayıtlara erişicez.
    Ders.find().then((result) => {
        res.send(result);
    });
});

//MONGODB İLE GETBYID YAPMAK
app.get("/tek-ders", (req,res) => {
    //bu sefer findbyId metotunu kullanmamız gerekir. Parametre olarak bir ıd vermemiz gerekir.
    Ders.findById("647c5f922062a2bd104ab05a").then((result) => {
        res.send(result);
    });
});

app.get("/",(req,res) => {
    //html sayfasının ismini renderlamam yeterli. İlk parametre hangi sayfanın render edileceğini sağlarken ikinci parametresi opsiyonlu bir şekilde veri göndermeyi sağlar. Dinamik olarak veri göndermek yani.
    // const dersler = [
    //     {baslik:"React Kursu", icerik:"React Hooks ve React Native"},
    //     {baslik:"Flutter Kursu", icerik:"Flutter ve Firebase Ile Uygulama"},
    // ]
    // res.render("index", {dersler});
    //anasayfa için yani kullanıcı direkt sayfamıza girdiğinde gözükecek sayfa için bir kendimiz obje dizisi oluşturmuştuk ve bunu index sayfamıza gönderip bu bilgileri orda göstermiştik. Şimdi kullanıcı sayfaya girdiğinde direkt olarak onu /dersler urlsine gönderelim.
    res.redirect("/dersler");
});



app.get("/hakkimda",(req,res) => {
    res.render("hakkimda",{hakkimda:"AOS Egitim Hakkinda"});
});

app.get("/ders/ekle", (req,res) => {
    res.render("ekle");
});




//hiç istenilmeyen bir url geldiğinde use middlewearını kullanalım. Status kodunu 404 olarak ayarlayabiliriz.
//middlewear uygulamamızda kullandığımız bir arayazılımdır. Tekrar eden işlemleri kontrol edebilmek için middlewear oluşturur ve kullanırız. app.Use() metotu ile middlewear oluştururuz.
//middlewearlar ile hata sayfalarını yönetebiliriz, auth işlemini gerçekleştirebiliriz ve yaptığımız her işlem için log tutabiliriz. Bunların hepsi tekrar eden işlem olduğu için bir arayazılım bunu kolaylıkla gerçekleştirebilir
app.use((req,res) => {
    res.status(404).render("404");
});
