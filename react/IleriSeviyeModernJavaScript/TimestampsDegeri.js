//şimdiki zaman ve eski bir tarihi tutacak değişkenler tanımlayalım
let simdikiZaman = new Date();
//2019 0. ay ve 1.gün demiş oluruz. yıl,ay,gün,saat,dakika,saniye bu parametrenin sıralamasıdır.
let eskiTarih = new Date(2019,0,1);
console.log(simdikiZaman,eskiTarih);

//iki tarih arasındaki farkı aldığımızda bize timestamps dediğimiz bir değer olarak geriye veriyor.
var fark1 = simdikiZaman-eskiTarih;
console.log(fark1);
//değerleri timestamps olarak ayalarıp getTime() metotu ile, öyle çıkartma işlemini yaparsak yine aynı şey oluyor fark olmuyor.
var fark2 = simdikiZaman.getTime()-eskiTarih.getTime();
console.log(fark2);

//kaç dakika geçtiğini bulalım aradaki farkın.
const dakika = Math.round(fark1/1000/60);
console.log(dakika);
//aradaki farkın kaç saat geçtiğini bulalım
const saat = Math.round(dakika/60);
console.log(saat);
//aradaki farkın kaç gün geçtiğini bulalım
let gun = Math.round(saat/24);
console.log(gun);

//timestamps verisini nasıl tarihe çeviricez
//önce şimdiki zamanın timestamp verisine ulaşalım
let timeStamp = new Date().getTime();
console.log(timeStamp);
console.log(new Date("burasinin icerisine timestamp verisi yazilarak tarihe dönüstürme islemi yapilir"));
