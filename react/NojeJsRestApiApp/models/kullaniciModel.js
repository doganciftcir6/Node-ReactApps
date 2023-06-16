//server veritabanına bu model aracılığıyla erişecek.
//Bu model dbmiz ile iletişim kuracak, Server dosyamız ise bu modelle iletişim kurmuş kuracak controller üzerinden.

//dbye eriş
var kullanicilar = require("../data/kullaniciDB.json");
//benzersiz id için pakete ulaş
const {v4:uuidv4} = require("uuid");
//yeni kayıt oluştuktan sonra bunu dosyaya yazma işlemi için
const {dosyayaYaz, DosyayaYaz} = require("../utils");

//getall metotu yapalım geriye tüm kullanıcıları veren.
async function GetAll(){
    //dosyadan bir veriye aktarım yapıp geri döndürme işlemi uzun süreceği için async promise olarak çalışıcaz.
    //verileri Promise yapısının resolveına koyalım yani başarılı olduğu özelliğe.
    return new Promise((resolve,reject) => {
        resolve(kullanicilar);
    });
}

//GetById
async function GetById(id){
    return new Promise((resolve,reject) => {
        const kullanici = kullanicilar.find((k) => k.id === id);
        resolve(kullanici);
    });
}

//post
async function Create(kullanici){
    return new Promise((resolve,reject) => {
        //uuid paketi sayesinde yeni kayıdın idsini her seferinde benzersiz yaparız
        //...kullanici diyerek parametredeki gelen kullanici bilgisini gerekli alanlara doldurulmasını sağlarım
        const yeniKullanici = {id:uuidv4(),...kullanici};
        //yani yaptığım işlem şu oluyor
        // const yeniKullanici = {id:uuidv4(),isim:kullanici.isim,email:kullanici.email}
        kullanicilar.push(yeniKullanici);
        //yeni oluşan kayıtla beraber olan yeni kullaniciler dizimizi dosyaya yazalım
        DosyayaYaz("./data/kullaniciDB.json",kullanicilar);
        resolve(yeniKullanici);
    });
}

//put
async function Update(id, kullanici){
    return new Promise((resolve,reject) => {
        //istenilen kaydın kulanicilar arrayinde indexini bulup ona göre yeni gelen bilgileri güncelleme işlemi yapalım
        const index = kullanicilar.findIndex((k) => k.id === id);
        kullanicilar[index] = {id,...kullanici}

        //yeni oluşan kayıtla beraber olan yeni kullanicilar dizimizi dosyaya yazalım
        DosyayaYaz("./data/kullaniciDB.json",kullanicilar);
        resolve(kullanicilar[index]);
    });
}

//Delete
async function Remove(id){
    return new Promise((resolve,reject) => {
        kullanicilar = kullanicilar.filter((k) => k.id !== id);
        DosyayaYaz("./data/kullaniciDB.json",kullanicilar);
        resolve();
    });
}


//bu oluşturduğumuz metotları dışarıya açık hale getirmeliyiz ki controller kullanabilsin.
module.exports = {
    GetAll,
    GetById,
    Create,
    Update,
    Remove
}

