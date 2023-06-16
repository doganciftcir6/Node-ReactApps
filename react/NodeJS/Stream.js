//bu konu anlatımı için dosyalar klasörünün içindeki uzun.txt dosyasını kullanıcaz. İçinde uzun bir metin var stream ile bu metni okumaya çalışıcaz.
const fs = require("fs");
//createReadStream() fonksiyonu ile bu işi yapacağız ilk parametresi dosyanın yolu ikinci parametresi ise metin formatını belirlicez. Burası optionların olduğu kısım onları tanımlamak için {} kulannıyoruz.
const streamOku = fs.createReadStream("./dosyalar/uzun.txt", {encoding:"utf-8"});
//streamOku artık streamları okuyabilir hale geldi.
//on() metotu ile datayı üretiyorum ilk parametrede eventimiz data okuma olduğu için ikinci parametre olarak fonksiyon üreticez ve onun parametresine veriler düşecek.
streamOku.on("data",(veri) => {
    console.log("--------verş yigin------");
    console.log(veri);
});

//yazma işlemide gerçekleştirebiliriz createWriteStream("./dosyalar/yaz.txt") metotu içerisine yazılacak dosyanın pathini belirtiyoruz.
//streamOku değişkeninde okuyup aldığımız verileri başka bir dosyaya yazdıralım. write(veri) fonksiyonunun parametresine bu veriyi vererek.
const streamYaz = fs.createWriteStream("./dosyalar/yaz.txt");
streamOku.on("data", (veri) => {
    streamYaz.write(veri);
});

//yazma işlemini farklı şekilde de yapabiliriz pipe() metotu ile. parametresine ise yazılacak olan dosyayı yerleştiriyorum.
streamOku.pipe(streamYaz);
