// serverimiz burada olusacak
//server olusturmak icin http paketlerine ihtiyacımız var.
const http = require("http");
//controllera erişmemiz lazım
const {GetAllKullanicilar, GetByIdKullanici, CreateKullanici, UpdateKullanici, RemoveKullanici} = require("./controller/kullaniciController");
const { GetById } = require("./models/kullaniciModel");

//serveri olusturalım
const server = http.createServer((req,res) => {
    //bu hosta istek atıldığında bir postmanle, isteğin ve cevabın gerekli bilgileri buraya düşecektir.
    console.log(req.url);
    console.log(req.method);
    //request ile gelen istekleri yakalarıs res ile de cevap verebiliriz.
    //bir cevap gönderelim, cevabın statuscodeunu, html sayfaları ile çalışacağımız için text/html olarak başlığını, ve içeriğini yazabiliriz.
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.write("<h1>Merhaba NodeJs</h1>");
    // res.end();
    //cevap olarak kullaniciDb.json dosyamızdaki JSON verileri gönderelim.
    //basit bir routing yaparak isteklerin http metotlarına göre cevabımızı verelim.
    //getall metodu yapalım, getbyıd, post, put, delete
    if(req.url === "/api/kullanicilar" && req.method === "GET"){
        // res.writeHead(200,{"Content-Type":"application/json"});
        // res.end(JSON.stringify(kullanicilar));
        //controller metodunu çalıştır
        GetAllKullanicilar(req,res);
    }
    else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method === "GET"){
        //yukarıdaki matchleme işlemiyle bir kontrol yapmış oluyoruz kulanıcı bu url bilgisi dışında bir bilgi giremez.
        //url bilgisini 3 e bölüp 3. eleman olan id kısmını alalım. Idyi yakala urldeki.
        const id = req.url.split("/")[3];
        GetByIdKullanici(req,res,id);
    }
    else if(req.url === "/api/kullanici" && req.method === "POST"){
        CreateKullanici(req,res);
    }
    else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method === "PUT"){
        const id = req.url.split("/")[3];
        UpdateKullanici(req,res,id);
    }
    else if(req.url.match(/\/api\/kullanici\/([0-9]+)/) && req.method === "DELETE"){
        const id = req.url.split("/")[3];
        RemoveKullanici(req,res,id);
    }
    else{
        res.writeHead(404, {"Content-Type":"application/json"});
        res.end(JSON.stringify({mesaj:"Yonlendirme gecersiz hata olustu."}));
    }


});
//port numarası ayarla, portu dışarıdan vermek için process.env.PORT veya dışarıdan vermeyeceksek sabit 5000 olarak ayarlarız.
const PORT = process.env.PORT || 5000;
//serveri dinle
server.listen(PORT, () => {
    console.log(`server ${PORT} port no ile calisiyor.`);
});