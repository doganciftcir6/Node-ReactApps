//bu konu anlatımı için files klasörünü ve içindeki bilgi.txt dosyasını kullanıcaz.
//dosyaya erişme işlemleri ve dosya sistemi işlemlerini incelicez.

//dosyanın içerisindeki yazıyı okumak istersek
//önce file systemi yani fs i çağırmalıyız
const fs = require("fs");
//artık içerisindeki fonksiyonları kullanabiliyorum.
//fs.readFile() metotu ile dosya okuma işlemini yapabilirim. Bunun ilk parametresi okunacak olan dosyanın konumudur. İkinci parametre ise err ve data parametesi alan bir fonksiyon yazarız. Dosyanın içeriği data parametresine herhangi bir hata olursa o hatada err parametesine düşecektir.
fs.readFile("./files/bilgi.txt", (err, data) => {
    if(err){
        //bir hata oluştu
        console.log(err);
    }
    else{
        //hata oluşmadıysa dosyanın içeriğini okuruz
        //direkt data nın içinde bilgi bufferlanmış şekildedir. toString() kullanarak direkt dosya içindeki veriye ulaşabiliriz.
        console.log(data.toString());
    }
});


//dosyaya yazma işlemi yapalım
//writeFile() fonksiyonu ilk parametre olarak dosyanın yolunu ister. Eğer bu dosya isminde bir dosya belirtilen konumda yoksa yeni bir dosya üretir ama eğer varsa var olan dosyanın üzerine yazar. İkinci parametre olarak dosyanın içine yazdıracağımız metini girelim, Ücüncü parametre ise işlem gerçekleştiğinde çalışacak olan fonksiyonu yazıyoruz.
fs.writeFile("./files/bilgiNotu.txt", "bilgiler", () => {
    console.log("dosya olusturuldu");
});



//mkdir() fonksiyonu ise ilk parametrede belirtilen konumda klasör oluşturur. Herhangi bir hata oluşursa ise ikinci parametredeki fonksiyonun err parametresine bu hata düşecektir. Eğer dosya aynı isimle aynı konumda zaten varsa dosya zaten bulunuyor hatası döner.
fs.mkdir("./dosyalar/", (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("dosya olustu");
    }
});
//bir dosya oluşturmak için kodlarımızı yazarken dosyanın daha önceden var olup olmadığını kontrol etmeliyiz. fs.existsSync() metotuyla bunu kontrol edebiliyoruz. Bu metot içerisine bir konum path ister.
//bu aşağıdaki kullanım dosyalar klasörünün var olup olmadığını kontrol edecektir.
if(!fs.existsSync("./dosyalar")){
    //yoksa
    fs.mkdir("./dosyalar/", (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("dosya olustu");
        }
    });
}
else{
    //dosya bu konumd daha önce varmış,  fs.rmdir("./dosyalar"); ile bu klasörü silelim yani bu rmdir metotu ise parametresindeki dosyayı siler ve ikinci parametresindeki fonksiyonun err parametresine bu sırada bir hata olursa o hata düeşecektir.
    fs.rmdir("./dosyalar", (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("dosya silindi");
        }
    });
}


//eğer bir klasörün içindeki veriyi silmek istersem rmdir kulanamam çünlü o sadece klasörü siler.  fs.unlink() fonksiyonu ile parametrede verilen veriyi silebiliyoruz.
if(fs.existsSync("./dosyalar/sil.txt")){
    //varsa
    fs.unlink("./dosyalar/sil.txt", (err) => {
        console.log(err);
    });
}
