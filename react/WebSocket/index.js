var express = require("express");
var socket = require("socket.io");

//server oluştur
//burada cevabı gönderip kanalı kapatır. SOCKETIO ile client ile server arasında kapanmayan bir kanal oluşturucaz client ve server arasında böylece servera bağlanan clientler server bütün clientlara aynı anda mesaj atıcak ya da kendisi hariç diğerlerine atacak bu clientlerda bu mesajı anlık olarak görebilecek örnek olarak whatsapp.
//her sayfayı yenilediğimizde socket ile açtığımız bu kanal tekrardan oluşturuluyor ve socketid değişiyor. 
var app = express();
var server = app.listen(3000,function(){
    console.log("3000.portu dinleniyor");
});
//io oluştur, io bir bağlantı izleyici olacak.
var io = socket(server);
//bağlantıyı oluştur
io.on("connection",(socket) => {
    console.log("socket baglantisi olusturuldu", socket.id);
    //clienttan gönderdiğimiz mesajı burda yakalayalım on() içinde bağlantı ismiyle yakalıyoruz kendi verdiğimiz.
    socket.on("chat", function(data) {
        console.log(data);
        //clienttan gelen mesajı yakalamış olduk şimdi bu servera bağlı olan bütün clientlara verileri göndermek
        io.sockets.emit("chat2", data);
    });

    //boradcasting için clienttan gelen bilgiyi yakalamamız lazım.
    //Broadcasting işlemi serverin kendisine mesaj atan client atan hariç diğer clientlara veriyi gönderme işlemidir. Clientin kendisi hariç herkese veri gönderilir.
    socket.on("yaziyor", function(data){
        //gelen veriyi biz boradcast yöntemi ile diğer clientlara aktarıcaz.
        console.log(data);
        socket.broadcast.emit("yaziyor", data);
    });
});

//static dosyamızı middlewear olarak dışarıya açalım
app.use(express.static("public"));
