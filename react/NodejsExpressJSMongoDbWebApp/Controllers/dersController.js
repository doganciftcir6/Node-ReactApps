//controller modeli kullnarak veritabanı işlemlerini gerçekleştirecek bizde route sayfasından bu metotları endpointlerimizde tüketeceğiz. Rotalarımız serverde bu işlemi gerçekleştirip kullanıcıya uygun bir şekilde cevap veriyor.

const Ders = require("../models/ders");



//bir fonksiyon ile bu rotaların içinde yaptğımız işlemleri gerçekleştirebiliriz.
//getall işlemi yapalım dbden.
const GetAll = (req,res) => {
    //içerisinde bütün dersler göndersin bu metot
    //tüm belgeleri çektiğim esnada sıralama filtreleme yapmam mümkün. Son yüklenen kaydı en başta yazdıralım.
    Ders.find().sort({createdAt:-1}).then((dersler) => {
        //dersler propuna senin içinde artık then ile gelen dersler belge verileri var diyorum.
        res.render("index", {dersler:dersler});
    }).catch((err) => {
        console.log(err);
    });
};

//dbye kayıt ekleme yapalım
const Insert = (req,res) => {
     //formdan inputlardan gelen bilgileri req.body ile yakalayabiliriz. Buradaki  { baslik2: 'deneme', icerik: 'eneme' } bilgsiindeki baslik: bilgileri inputların name özellğinden geliyor.
    //formun actionu ile burda bulunan "/dersler" postun hemen yanına girdiğimiz bu bilgi birebir aynı olduğu ve formun methodunun post olmasından dolayı çalışması gerektiğini anlıyor.
    console.log(req.body);
    const ders = new Ders(req.body);
    ders.save().then((result) => {
        res.redirect("/dersler");
    }).catch((err) => console.log(err));
}


//dbden getbyıd yapalım
const GetById = (req,res) => {
    //urldeki idyi yaklayalım
    const id = req.params.id;
    Ders.findById(id).then((ders) => {
        res.render("detay", {ders:ders})
    }).catch((err) => {
        console.log(err);
    });
}


//dbden kayıt sil
const Delete = (req,res) => {
    // fetch sayesinde artık buton tetiklendiğinde click olduğunda burası çalışacak
    //window.locaiton.href dediğimiz için burada idyi yakalayabiliriz.
    const id = req.params.id;
    Ders.findByIdAndDelete(id)
        .then((result) => {
            //burdaki redirect özelliği html sayfasındaki scripte geri düşecek.
            res.json({redirect:"/dersler"});
        }).catch((err) => console.log(err));
}


module.exports = {
    GetAll,
    Insert,
    GetById,
    Delete
}