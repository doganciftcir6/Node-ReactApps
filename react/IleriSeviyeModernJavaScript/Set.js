//set ile bir dizide bulunan elemanları unic benzersiz yaparız tekilleştirebiliriz. Birden fazla tekrar eden eleman olamaz.
//büyük küçük harfe duyarlıdır. eğer 2 alinin birisinin a sı büyükse bunu aynı saymaz.

const dizi1 = ["ali","osman","esra","ali","oyku"];
console.log(dizi1);
//bu dizideki ali elemanının 1 tane olmasını istediğim zaman set metotunu kullanabiliyorum.
const dizi2 = new Set(["ali","osman","esra","ali","oyku"]);
console.log(dizi2);

const dizi3 = new Set(dizi1);
console.log(dizi3);

const sayilar = new Set();
//setlerde eleman eklemek
sayilar.add(25);
sayilar.add(30).add(25);
//setlerde eleman silmek
sayilar.delete(30);
//kaç tane eleman olduğunu nasıl buluruz
console.log(sayilar.size);
//30 un bu set içinde olup olmadığını kontrol etmek varsa true döner.
console.log(sayilar.has(30));
//setin içindeki bütün elemanları silmek
sayilar.clear();
console.log(sayilar);
