let mail = "aliosmanhazir@gmail.com";

//string bir ifade içerisindeki belli bir karakterin indeks değerlerini bulma işlemi;
//indexOf fonksiyonu mail stringi içerisindeki ilk m karakterinin indeksini bize söylüyor.
let bastanIndex = mail.indexOf('m');
console.log(bastanIndex);
//lastIndexOf fonksiyonu mail stringi içerisindeki son m karakterinin indeksini bize söylüyor.
let sondanIndex = mail.lastIndexOf('m');
console.log(sondanIndex);

//Slice fonksiyonu mail stringinin 5. indeksinden başlar ve 10. indekse kadar karakterleri alır. (10. indeks dahil değildir.)
console.log(mail.slice(5,10));
//Substring fonksiyonu mail stringinin 5. indeksinden başlar ve 10. indekse kadar alır (slicedan farklı olarak başlangıç ve bitiş indisleri negatif değerleri kabul etmez ve gerekirse otomatik olarak düzeltir. )
console.log(mail.substring(5,10));
//replace fonksiyonu mail stringi içinde ilk görüdüğü küçük m karakterini büyük M yapar.
console.log(mail.replace('m','M'));