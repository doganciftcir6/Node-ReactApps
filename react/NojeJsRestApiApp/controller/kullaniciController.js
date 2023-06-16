//bu controller model ile server dosyamız arasında bağlantı kuracaktır.

//postmande bodysi ile kayıt eklemek için;
const {GetPostData} = require("../utils");

//burada yazdığımız Getall metotunu çalıştırıp cevabı döndürelim.
//modele eriş.
const Kullanici = require("../models/kullaniciModel");
//promise bir cevap beklediğimiz için async olamlı
async function GetAllKullanicilar(req,res){
    try {
        //buraya model kısmında resolve bilgisini doldurduğumuz veri burda ilgili metotu kullandıktan sonra kullanicilar değişkeni içerisine geliyor. Reject te hata tanımalrsak ve bir hata olursa bu seber bu değişkenin içine reject verisi düşerdi.
        const kullanicilar = await Kullanici.GetAll();
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(kullanicilar));
    } catch (error) {
        console.log(error);
    }
}

//GetById
async function GetByIdKullanici(req,res,id){
    try {
        //buraya model kısmında resolve bilgisini doldurduğumuz veri burda ilgili metotu kullandıktan sonra kullanici değişkeni içerisine geliyor. Reject te hata tanımalrsak ve bir hata olursa bu seber bu değişkenin içine reject verisi düşerdi.
        const kullanici = await Kullanici.GetById(id);
        if(!kullanici){
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({mesaj:"Kullanici Bulunamadi"}));
        }
        else{
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(kullanici));
        }
    } catch (error) {
        console.log(error);
    }
}

//post
async function CreateKullanici(req,res){
    try {
        //postmand bodysine girilen bilgiyi yakalamak ve onu kayıt etmek için
        const body = await GetPostData(req);
        const {isim,email} = JSON.parse(body);
        const kullanici = {
            isim:isim,
            email:email
        }
        //buraya model kısmında resolve bilgisini doldurduğumuz veri burda ilgili metotu kullandıktan sonra yeniKullanici değişkeni içerisine geliyor. Reject te hata tanımalrsak ve bir hata olursa bu seber bu değişkenin içine reject verisi düşerdi.
        const yeniKullanici = await Kullanici.Create(kullanici);
        res.writeHead(201,{"Content-Type":"application/json"});
        return res.end(JSON.stringify({yeniKullanici}));
    } catch (error) {
        console.log(error);
    }
}


//put
async function UpdateKullanici(req,res,id){
    try {
        //buraya model kısmında resolve bilgisini doldurduğumuz veri burda ilgili metotu kullandıktan sonra kullanici değişkeni içerisine geliyor. Reject te hata tanımalrsak ve bir hata olursa bu seber bu değişkenin içine reject verisi düşerdi.
        const kullanici = await Kullanici.GetById(id);
        if(!kullanici){
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({mesaj:"Kullanici Bulunamadi"}));
        }
        else{
            //postmand bodysine girilen bilgiyi yakalamak ve onu kayıt etmek için
            const body = await GetPostData(req);
            const {isim,email} = JSON.parse(body);
            //burada postmand bodysine bilgi gelirse o bilgi yeni kullaniciya aktarılacak eğer girilmezse eski bilgi aktarılacak. Sadece ismi güncellemek istersek email bilgisine eski değer atanır.
            const kullaniciVerisi = {
                isim:isim || kullanici.isim,
                email:email || kullanici.email
            }
            //update
            const updateKullanici = await Kullanici.Update(id, kullaniciVerisi);
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify(updateKullanici));
        }
    } catch (error) {
        console.log(error);
    }
}

//delete
async function RemoveKullanici(req,res,id){
    try {
        //buraya model kısmında resolve bilgisini doldurduğumuz veri burda ilgili metotu kullandıktan sonra kullanici değişkeni içerisine geliyor. Reject te hata tanımalrsak ve bir hata olursa bu seber bu değişkenin içine reject verisi düşerdi.
        const kullanici = await Kullanici.GetById(id);
        if(!kullanici){
            res.writeHead(404,{"Content-Type":"application/json"});
            res.end(JSON.stringify({mesaj:"Kullanici Bulunamadi"}));
        }
        else{
            //remove
            await Kullanici.Remove(id);
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end(JSON.stringify({mesaj:`Kullanici id = ${id} silinmistir`}));
        }
    } catch (error) {
        console.log(error);
    }
}

//metotları dışarıya aç ki server kullanabilsin.
module.exports = {
    GetAllKullanicilar,
    GetByIdKullanici,
    CreateKullanici,
    UpdateKullanici,
    RemoveKullanici
}