//bu konu anlatımı için htmls klasörünün içindeki sayfaları kullanıcaz.
const http = require("http");
//bu dosyaları çalıştırmak için dosya sisteminden yararlanmak gerekiyor
const fs = require("fs");

//lodash paketi bu burayla alakasız bir konu mantık arama.
const _= require("lodash");
const ratgele = _.random(0,50);
console.log(ratgele);

const server = http.createServer((req,res) => {
//sayfanın gelen url bilgisine göre farklı html sayfaları vereceğiz response olarak. Bunun için switch case yapısı kullanabiliriz. req.url ile sayfanın adresinden localhost:3000/ burdaki slashtan sonrasını çekmiş oluruz.
//bu esnada status codelarıda belirtebiliyoruz.
let path = "./htmls";
switch (req.url) {
    case "/":
        path += "/index.html";
        res.statusCode = 200;
        break;
    case "/udemy":
        path += "/udemy.html";
        res.statusCode = 200;
        break;
    case "/youtube":
        path += "/youtube.html";
        res.statusCode = 200;
        break;
    default:
        path += "/404.html";
        res.statusCode = 404;
        break;
}
    //bir başlık oluşturalım html saufalarıyla çalıştığımız için text-html yapmalıyız.
    res.setHeader("Content-Type", "text-html");
    //bu dosyaları okuyarak kullanıcıya gösterelim
    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }
        else{
            //hata yoksa okuduğıumuz veriyi cevap olarak gönderelim
            //bunu yaptığımızda web sayfasında cevap olarak bu html sayfası gözükecektir.
            res.write(data);
            res.end();
        }
    })
});


server.listen(3000, "localhost", () => {
    console.log("3000. port dinleniyor");
});


//statuscode nedir?
//server tarafından kullanıcıya verilen cevaptır.
//eğer bu cevap 100lerle başlıyorla bilgilendirme cevapları
//200lerle başlıyorsa cevap sana başırılı şekilde verilmiştir
//300lerle başlıyorsa yeniden yönlendirme yapılmıştır
//400lerle başlıyorsa kullanıcı ya da client hatasıdır
//500 lerle başlıyorsa sever hatasıdır.
//200 status kodu ok demek oluyor ve başarılı işlem gerçekleşti
//301 status kodu gelirse yönlendirme yapılmış demek oluyor
//404 ile notfound yani bulunamadı
//500 internal server error server kaynaklı hata verilmiş oluyor