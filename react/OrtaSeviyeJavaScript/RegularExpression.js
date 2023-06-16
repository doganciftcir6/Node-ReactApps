//RegularExpression ile kullanıcı bir formda bir inputa veri girdiğinde kullanıcının girdisini belirli kriterlere kurallara göre sınırlandırabiliyoruz.
//regex101.com sayfasında bu regularExpressionları test etme imkanımız mevcut.
// örnek olarak elimizde ali olsun  en başa ^ali işareti ile kesinlikle ali ile başlamalı diyoruz
// eğer en sona ali$ yaparsak kesinlikle ali ile bitmeli diyoruz
// ^ali$ dersek sadece ali olmalı diyoruz
// A ve z arası bütün küçük harfler demek için [a-z] => ^[a-z]$ dersek eğer küçük harflerle bir karakterle başla bir karakterle bitir demiş oluruz. Harfleri belirlemek için ise ^[a-z]{4,7}$ bu diziden en az 4 tane en fazle 7 tane kullabilirsin diyoruz. ^[a-zA-Z]{4,7}$ Yaoarsak için içine büyük harfleride dahil etmiş oluruz eğer burda sayı da olsun istersek. ^[a-zA-Z0-9]{4,7}$ diyebiliriz.
//^.{4,7}$ bütün karaktereler olsun 4 ve 7 uzunluk arasında diyoruz.
//^.{4,}$ ise bütün karakterler olsun en az 4 en fazla sınırsız uzunlukta diyoruz.
//^.{,10}$ ise bütün karakterler olsun en azı sınırsınız en fazla 10 uzunluğunda olsun diyoruz


//örnek yapalım
let parola = "ali123";
//parolamı belirli bir desene göre oluşturmak istiyorum. Bu desen ise reguler expression deseni olmalı.
//küçük a ve z arası ve 0-9 sayılarından oluşacak ama en az 7 karakter uzunluğunda en fazlası ise sonsuz olsun istiyorum
let desen = /[a-z0-9]{7,}/;
//bu desene uyup uymadığını kontrol edelim test metotuyla parolanın, eğer uymuyorsa false gelir.
let sonuc = desen.test(parola);
console.log(sonuc);

//parolanın içerisinde deseni arayarakta bu işlemi yapabiliriz. Search metotu ile. Eğer kurala uyarsa 0 dönüyor eğer uymazsa -1 dönüyor.
sonuc = parola.search(desen);
console.log(sonuc);