console.log('Ali Osman Hazır');
//string içinde sayı ve özel karakter kullanılabilir
let mail = "aliosmanhazir1@gmail.com";
console.log(mail);


//string aslında karakterlerden oluşan bir dizidir.
let isimKarakter1 = 'a';
let isimKarakter2 = 'l';
let isimKarakter3 = 'i';
let karakterBirlestir = isimKarakter1 + isimKarakter2 + isimKarakter3;
console.log(karakterBirlestir);

//ali stringinin 0. karakteri A dır. String aslında bir karakter dizisi.
let isim = 'Ali';
let soyisim = "Hazır";
//string birleştirme
let tamIsim = isim + " " + soyisim;
console.log(tamIsim);
console.log(tamIsim[0]);
//bu string yani karakter dizisinin karakter sayısını bulabiliriz
console.log(tamIsim.length);
//bu string yani karakter dizisinin tüm karakterlerini büyük veya küçük harfe çevirebiliriz.
let buyukHarf = tamIsim.toUpperCase();
let kucukHarf = tamIsim.toLowerCase();
//aralarına virgül koyarak aynı satırda iki değişkenide gözlemleyebiliriz konsolda.
console.log(buyukHarf,kucukHarf);

