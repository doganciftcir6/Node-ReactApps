//bir nesne birden fazla değişkenle birlikte günlük hayatta kullandığımız nesneye işaret eden javascript tipi.
let kullanici = {
    isim:"Ali Osman",
    soyisim:"Hazir",
    yas:30,
    tel:"5555555555",
    kurslar:["Flutter","Pyhton","React Native"],
};

//kullanıcı nesnesinin içerisindeki özelliklere ulaşmak
let ad = kullanici.isim;

//bir diğer yol ile özelliklere ulaşmak
let tel = kullanici["tel"];

//nesne içerisindeki dizilere erişmek
let ilkKurs = kullanici.kurslar[0];

console.log(kullanici);
console.log(ad);
console.log(tel);
console.log(ilkKurs);

//kullanıcı nesnesinin tipine erişmek için
console.log(typeof kullanici);
