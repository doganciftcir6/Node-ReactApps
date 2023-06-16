//oluşturduğumuz soketi client tarafında dinleyebiliriz.
//clientin bu serverla bağlantı açması gerekiyor. CDN gerekli html tarafında.
var socket = io.connect("http://localhost:3000/");

//elemanları yakala
var mesaj = document.querySelector("#message"),
    baslik = document.querySelector("#handle"),
    btn = document.querySelector("#send"),
    output = document.querySelector("#output"),
    feedback = document.querySelector("#feedback");

//mesaj göndermeyi gerçekleştir
btn.addEventListener("click", function(){
    //emit() yaymak anlamına geliyor. Mesajı client tarafında işlem yaptığımız için server tarafına gönderecek. Server ise ordan bütün kendisine bağlı olan clientlera yayacak. Gönderirken aradaki anlaşmayı sağlayacak olan bir isimlendirme vermemiz gerekiyor. İlk parametre bu isimlendirmeyi ayarlamak. İkinci parametre veri göndermek için.
    socket.emit("chat",{
        mesaj: mesaj.value,
        baslik: baslik.value
    });
    //servera mesajı gönderdikten sonra inputu temizle
    mesaj.value = "";
});

//boradcasting için
mesaj.addEventListener("keypress", function(){
    //mesaj inoutuna veri girilmeye başlandığında servera veri göndericez.
    socket.emit("yaziyor", baslik.value);
});
//boradcasting için serverdan gelen datayı yakala
//önce burdan yani clienttan servera mesaj gönderdik server mesajı alıp kendisine bağlı olan tüm clientlara bu mesajı gönderdi şimdi client olarak bu mesajı yakalamamız gerekiyor.
socket.on("yaziyor",function(data){
    //bu sefer içerik, ilgili data clientın konsolunda yakalanır.
    //feedback elemanınmın divimin içerisine bu bilgileri aktarabilirim.
    feedback.innerHTML = "<p><em>" + data + "yaziyor </em></p>";
});

//önce burdan yani clienttan servera mesaj gönderdik server mesajı alıp kendisine bağlı olan tüm clientlara bu mesajı gönderdi şimdi client olarak bu mesajı yakalamamız gerekiyor.
socket.on("chat2",function(data){
    //bu sefer içerik, ilgili data clientın konsolunda yakalanır.
    console.log(data);
    //output elemanınmın divimin içerisine bu bilgileri aktarabilirim.
    output.innerHTML += "<p><strong>"+data.baslik+": </strong>"+data.mesaj+"</p>";
    feedback.innerHTML = "";
});