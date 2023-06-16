//diyelim ben 30 satırlık bir kod yazdım bu 30 satırda birbiriyle bir bütün daha sonra bu kodu 10 farklı yerde kullandım diyelim o zaman fonksiyon kullanamzsak 300 satırlık kod yazmış olurum ve aynı şeyi 10 kere yazmış olurum fonksiyon kullandığımızda ise bu kodları bir bütün haline getiriyoruz 10 farklı yerde de sadece fonksiyonu çağırarak işlemi tamamlıyoruz. 
//fonksiyon değişkenlere bağlı kod yazma imkanı oluşturuyor.

//fonksiyon oluşturma için 2 yöntem kullanılır birincisi decleration yöntemi
//function anahtar kelimesi sonrasında fonksiyonun ismi yazılır sonrasında parantezler koyulur ve süslü parantezler içine fonksiyonun ne yapacağı yazılır.
function SayiYaz(){
    console.log(30);
}
//fonksiyonu oluşturduk kullanmak için çağırmamız lazım.
SayiYaz();


//ikinic yöntem ise expressiondur. Bunda ise bir değişekene fonksiyonu komple aktarıyoruz.
const YaziYaz = function(){
    console.log("ali osman");
};
//şimdi kullanmak için fonksiyonu çağırıyoruz
YaziYaz();


//BURDA FARK OLARAK DECLERATİON YÖNTEMİNDE SÜSLÜ PARANTEZ YANINDA NOKTALI VİRGÜL KULLANMADIK AMA EXPRESSİON YÖNTEMİNDE SÜSLÜ PARANTEZ YANINDA NOKTALI VİRGÜL KULLANDIK KULLANMAZSAK YİNE ÇALIŞIR FONKYİONLAR AMA KULLANMAKTA FAYDA VAR.
//EN ÖNEMLİ FARK FONKSİYONU ÇAĞIRMAKTA OLUYOR DECLERATİON YÖNTEMİNDE FONKSİYONU TANIMLAMANIN ÖNCESİNDE BU FONKSİYONU ÇAĞIRIP KULLANABİLİYORUZ ANCAK EXPRESSİON YÖNTEMİNDE ÖNCE FONKSİYONU TANIMLAYIP SONRA ÇAĞIRMAMIZ LAZIM YOKSA ÇALIŞMAZ. Çünkü daha değişkene aktarım işlemi olmadan çağrıldığı için değişken bulunamıyor.

//bu çalışır. Decleration
SayiYaz2();
function SayiYaz2(){
    console.log(30);
}

//bu çalışmaz fonksiyon bulunamadı der. Expression
YaziYaz2();
const YaziYaz2 = function(){
    console.log("ali osman");
};


