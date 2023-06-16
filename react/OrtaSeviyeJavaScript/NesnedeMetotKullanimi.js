//NESNE İÇERİSİNDE OLUŞTURULAN FONKSİYONLARA METOT DENİR.
let kullanici = {
    isim:"Ali Osman",
    soyisim:"Hazir",
    yas:30,
    tel:"5555555555",
    kurslar:["Flutter","Pyhton","React Native"],

    //bir metot tanımlayalım
    GirisYap: function(){
        console.log("giris yapildi.");
    },
    //parametre alan bir metot tanımlayalım
    KursOlustur: function(kurs){
        console.log(`${kurs} kursu olusturuldu.`);
    },
    //metot direkt bu şekilde de oluşturulabilir function keywordu kullanılmadan.
    SelamVer(kullanici){
        `${kullanici} merhabalar.`
    }
};

//nesne içerisindeki metotu çağıröak
kullanici.GirisYap();
kullanici.KursOlustur("Socket IO");
kullanici.SelamVer("Dogan");