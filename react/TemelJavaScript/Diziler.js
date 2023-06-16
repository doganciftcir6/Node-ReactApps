//dizi tanımlaması
let dizi = [];
//boş diziye eleman eklemek (0.indeksindeki eleman yerine ali stringini atadık)
dizi[0] = "Ali";
//dizinin 1.indeksindeki eleman yerine osman stringini atadık.
dizi[1] = "Osman";
//dizinin 2. indeksindeki eleman yerine esra stringini atadık.
dizi[2] = "Esra";

//dizi elemanına erişmek
console.log(dizi[1]); //osman

//dizi oluşturma yöntemi 2
let dizi2 = new Array(25,45);
console.log(dizi2);

//bir dizide farklı türlere sahip değişkenler olabilir.
let dizi3 = ["Ali","Osman",45,78];
//dizinin eleman sayısına ulaşmak .length ile
console.log(dizi3.length);

//join fonksiyonu dizinin elemanlarının aralarına burada - koyarak elemanları birleştirme yapıyor.
let sonuc = dizi.join("-");
console.log(sonuc);
//indexOf fonksionu ile elemanın dizideki indeks numarasına ulaşıyoruz. Eğer eleman dizide bulunmuyorsa -1 sonucu döndürüyor.
sonuc = dizi.indexOf("Osman");
console.log(sonuc);
//bir diziye başka bir dizi ekleyerek birleştirmek istendiğinde Concat fonksiyonu kullanılıyor. dizi isimli dizi ile yeni diziyi birleştirip yeni bir dizi oluşturuyoruz aslında.
sonuc = dizi.concat([89,9]);
console.log(sonuc);
//diziye eleman eklemek push fonksiyonu ile dizinin sonuna eleman eklenir
sonuc = dizi.push("Öykü");
console.log(sonuc);
//diziden eleman ya da elemanlar silmek için Splice fonksiyonu kullanılır 2. indeksten başlayarak 1 tane eleman sil diyoruz.
sonuc = dizi.splice(2,1);
console.log(dizi);
//dizinin son elemanını kaldırmak için pop fonksiyonunu kullanılıyoruz.
sonuc = dizi.pop();
console.log(sonuc);
//dizinin ilk elemanını silmek için shift fonksiyonunu kullanyoruz.
sonuc = dizi.shift();
console.log(dizi);
//unshift fonksiyonu ile dizinin başına eleman eklemesi yapabiliyoruz.
sonuc = dizi.unshift("yenieleman");
console.log(sonuc);