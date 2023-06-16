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
        //this keywordu anlatımı için ben kurslar dizisine bu metot ile beraber yeni bir kurs eklemek istiyorum diyelim.
        //burada this kullanılmazsa kurslar is not defined der. İşte bu nesne içerisindeki özelliklere yine nesne içerisinde metotla erişmek istediğimizde this anahtar sözcüğünü kullanırız.
        //this anahtar sözcüğü burdaki kullanici nesnesinin kendisine karşılık gelir. Yani this yerine kullanici. yapsak aynı şey oluyor.
        //yani this anahtar sözcüğü ile bu kullanici nesnesi içerisinde kullanici nesnesine ben erişmiş olurum.
        this.kurslar.push(kurs);
    },
    //metot direkt bu şekilde de oluşturulabilir function keywordu kullanılmadan.
    SelamVer(kullanici){
        `${kullanici} merhabalar.`
    },
    //this örneği
    KurslarGetir(){
        console.log(this.kurslar);
    }
};

//nesne içerisindeki metotu çağıröak
kullanici.GirisYap();
kullanici.KursOlustur("Socket IO");
kullanici.KurslarGetir();
kullanici.SelamVer("Dogan");