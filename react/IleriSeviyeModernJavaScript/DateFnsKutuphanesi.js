//Bu konunun anlatımı için index.html sayfasını kullanıcaz.
//DateFns kütüphanesi bizim tarihleri formatlayabilmek için kullandığımız bir kütüphanedir. Tarihleri istediğimiz söz diziliminde yazabilmemizi sağlıyor. Html sayfasına Cdn ekleyerek bu kütüphaneyi kullanabiliriz.

let simdikiZaman = new Date();
console.log(simdikiZaman);

//burada formatlayabilmek için DateFnsi kullanmamız lazım.
//ilk parametre hangi tarihi formatlamak istediğim, ikinci parametre neye göre formatlayacam buraya string format yazabiliriz.
let formatTarih = dateFns.format(simdikiZaman,"YYYY");
let formatTarih2 = dateFns.format(simdikiZaman,"MMMM");
let formatTarih3 = dateFns.format(simdikiZaman,"dddd");
//Do 6th yani 6. gün diye simgeler.
let formatTarih4 = dateFns.format(simdikiZaman,"Do");
let formatTarih5 = dateFns.format(simdikiZaman,"dddd Do MMMM YYYY");
console.log(formatTarih);
console.log(formatTarih2);
console.log(formatTarih3);
console.log(formatTarih4);
console.log(formatTarih5);
//önceki derste böyle erişmiştik. Bunların arasındaki fark dateFns string veri verir getFullYear ise number ifade alırız.
console.log(simdikiZaman.getFullYear());