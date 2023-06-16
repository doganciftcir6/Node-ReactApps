//server oluşturarak bir web sayfasını ayağa kaldırıcaz.
//bunun ilk adımı server oluşturmadır. Server oluşturmayıda http paketleriyle sağlıcaz.

const http = require("http");
//server oluşturmak http.createServer(); metotu ile yapabiliriz bu metot içerisine istekleri dinleyebilecek bir fonksiyon ister. Bu fonksiyonun içinde ise request ve response parametreleri olmalı. Biz bu parametrelerle responseları ve requestleri yakalıyoruz.
const server = http.createServer((req,res) => {
    //request bizim kullanıcıdan beklediğimiz istek yani serverimizin kullanıcdan aldığı istek
    //response ise bu kullanıcıya bu istek sonucunda oluşan cevabı gönderdiğimiz nesneler
    //yani request ile kullanıcıdan bize bir bilgi akışı response ise serverdan kullanıcıya bilgi akışını sağlayabiliriz.
    console.log("request olusturuldu");
    console.log(req.url, req.method);
    //isteğe cevap oluşturalım. başlık,içerik ve gönderme işlemi olarak.
    //başlık
    // res.setHeader("Content-Type","text/plain");
    //sayfada gözükecek içerik
    // res.write("merhaba aos");
    //responsu gönder
    // res.end();
    //cevap olarak sadece bir metin değil bir htmlde gönderebiliriz.
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>NodeJs Dersleri</h1>");
    res.write("<p>Request ve Response</p>");
    res.end();
});
//serveri oluşturduk şimdi bu serverin dinlenmesi gerekiyor. server.listen(); diyerek bunu dinlicez. parametre olarak ise hangi porttan dinleceğinizi yazıyoruz. İkinci parametre ise hostname ister localde çalıştığımız için localhost yazarız. Eğer serverde çalışacaksak serverin ıpsini yazarız. Üçüncü parametre ise bir fonksiyonla dinlenme sonucunda oluşabilecek durumu yakalayabiliriz.
server.listen(3000, "localhost", () => {
    console.log("3000. port dinleniyor");
});
//artık serverimiz ayağa kalkmış dinlenme durumuna geçmiştir.
