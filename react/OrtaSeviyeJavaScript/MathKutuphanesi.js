//Math nesnesini kullanıcaz aslında. İçerisinde matematiksel işlemleri js ile yapmamızı sağlıyor.

//pi sayısı
console.log(Math.PI);

//e sayısı
console.log(Math.E);

//round fonksiyonu hangi tam sayıya yakın ise oraya yuvarlar. Sayı doğrusuna göre yakınlığa bakar.
//ilk değer 4 e yuvarlanır
//ikinci değer 5 e yuvarlanır
//ücüncü değer 5 e yuvalanır aslında tam ortada kalıyor ama ortada olunca üst tam sayıya yuvarlıyor.
let deger1 = 4.3;
let deger2 = 4.8;
let deger3 = 4.5;

console.log(Math.round(deger1));
console.log(Math.round(deger2));
console.log(Math.round(deger3));

//floor fonksiyonu aşağıya doğru yuvarlama yapar
//ilk deger 4 e yuvarlanır
//ikinci deger 4 e yuvarlanır
//ücüncü deger 4 e yuvarlanır
console.log(Math.floor(deger1));
console.log(Math.floor(deger2));
console.log(Math.floor(deger3));

//ceil fonksiyonu floorun tam tersi yukarı doğru yuvarlama yapar
//ik değer 5 e yuvarlanır
//ikinci değer 5 e yuvarlanır
//ücücü değer 5 e yuvarlanır
console.log(Math.ceil(deger1));
console.log(Math.ceil(deger2));
console.log(Math.ceil(deger3));

//trunc fonksiyonu noktadan sonrasını yok sayar.
//ilk deger 4 verir
//ikinci deger 4 verir
//ücüncü deger 4 verir
console.log(Math.trunc(deger1));
console.log(Math.trunc(deger2));
console.log(Math.trunc(deger3));

//matematik işlem yaptıran fonlsiyonlar
//pow fonksiyonuyla ilk parametre deger ikinci parametre ise kuvveti üssü oluyor yani 8 üzeri 2 oluyor burada.
console.log(Math.pow(8,2));

//sqrt fonksiyonu parametrenin karekökünü alır
console.log(Math.sqrt(64));

//min fonksiyonu paremetrelerinin içindeki en küçük elemanı verir
console.log(Math.min(0,56,78,-45));
//max fonksiyonu paremetrelerinin içindeki en büyük elemanı verir
console.log(Math.min(0,56,78,-45));

//random fonksiyonu özellikle oyun yapanlar için çok önemli. 0 ile 1 arasında rastgele bir sayı üretir.
let rast = Math.random();
console.log(rast);
//0. lı sayıdan kurtulmak için yuvarlama yaparak tam sayı haline getirebiliriz.
//10 ile 100 arasında rastgele sayı üretelim
console.log(Math.round(rast*100)+10);