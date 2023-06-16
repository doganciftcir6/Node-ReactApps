let cap = 10;
let pi = 3.14;

//toplama(+) çıkartma(-) çarpma(*) bölme (/) mod alma (%) üssünü alma (**)
let sonuc1 = cap/2;
let sonuc2 = pi*3;
let sonuc3 = cap%3;
console.log(sonuc1,sonuc2,sonuc3);

//karesini almak
let sonuc4 = cap**2;
console.log(sonuc4);
//işlem önceliği mantığı (parantez önceliği mevcut sonra çarpma bölme)
let say1 = 5-8*4/6;
let say2 = (5-8)*4/6;
console.log(say1,say2);

//değişkenin değerini bir arttırmak
let sayici = 0;
sayici++;
console.log(sayici);
//değişenin değerini bir azaltmak
sayici--;
console.log(sayici);
//değişkenin değerine 4 ile çarpmak
sayici *= 4;
console.log(sayici);
//değişkenin değerine 3 ekelemek
sayici += 3;
console.log(sayici);
//sayıcı değişkenin değerinden bir çıkartıp atamayı öyle yapar. meseala değerimiz 0 diyelim bir çıkartıyoruz -1 oluyor yeni sayici değişkenine -1 olarak atıyoruz.
sayici = --sayici
//önce atamayı yapıyor diyelim değerimiz 0 olsun yeni sayici değişkenine 0 değerini atıyor daha sonradan sayici değişkeninin değerini bir arttırıyor.
sayici = sayici--

//NaN Not a Number (bir ifadenin number olmadığını göstermek için kullanılır)
console.log(4/"hey");
//sayılar ile string ifadelerin birlikte kullanımı
let yazi = "toplam sayı: " + sonuc1;
console.log(yazi);