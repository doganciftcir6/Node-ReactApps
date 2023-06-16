//Date ile tarih işlemlerini yapabiliyoruz.

//şimdiki tarihi almak
const tarih = new Date();
console.log(tarih);
//tarihin tipine bakmak bir object olduğunu görebiliriz.
console.log(typeof tarih);

//yil olarak şimdiki tarihi alalım
let yil = tarih.getFullYear();
//artık tipi number oldu
console.log(typeof yil);

//şimdiki zamanın ay bilgisini alalım bu da number türünde olur. Ayları 0 dan başlayıp 11 e kadar sıralar ve hangi aydaysak o ayın numarasını verir örnek olarak 0 ocak ayıdır.
let ay = tarih.getMonth();
console.log(ay); 

//şimdiki zamanın gün bilgisini alalım
//getDate dediğimiz zaman o ay içerisindeki hangi günde olduğumuzu yakalar yani 30 a kadar
//getday dediğimiz zaman ise o haftanun hangi gününde olduğunu yakalarız pazartesini 1 olarak alır
let gun = tarih.getDay()
let gun2 = tarih.getDate()

//şimdiki zamanın saat aralığını almak
console.log("saat " + tarih.getHours());
//şimdiki zamanın dakika aralığını almak
console.log("dakika " + tarih.getMinutes()); 
//şimdiki zamanın saniye aralığını almak
console.log("saniye " + tarih.getSeconds()); 

//şimdiki zamanın tarih bilgisini object değilde string olarak kullanmak istersem toDateString() metotu ile sadece saat olmadan tarihi string olarak yakalarız
console.log(tarih.toDateString());
//aynı işin saati yakalama işlemini ise toTimeString() metotu ile tarih bilgisi olmadan sadece saat bilgilerine string olarak erişebiliriz
console.log(tarih.toTimeString());
//bu string ifadelerde toLocaleString() metotu ise local olarak bize tarihi ve saati string olarak veriyor. Bizim bilgisayarın kullandığı tarih saat bilgisini alır.
console.log(tarih.toLocaleString());

//getTime() metotu ile şimdiki zamanın bize kriptolanmış halini yakalayabiliyoruz.
console.log(tarih.getTime());


