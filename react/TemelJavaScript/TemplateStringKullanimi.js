//template string kullanarak boşluk verme ve bilgileri alt satıra geçirme işlemlerini gerçekleştirebiliriz.
let isim = "Ali Osman";
let yas = 23;
let soyisim = "Hazir";
//üç bilgiyi bir arada yazdırarak string birleştirme
let bilgiler = "Adiniz: " + isim + "Soyadiniz: " + soyisim + "Yasiniz: " + yas;
console.log(bilgiler);
//template string kullanalım aynı bu aşağıdaki template formatta yazılacak konsola.
let bilgiler2 = `
Adiniz ${isim}
soyadiniz ${soyisim} 
ve 
yasiniz ${yas}
`
console.log(bilgiler2);
//bu sayede biz bu template stringi kullanarak html ifadeleri bir arada yazıp düzenleyebileceğiz.
let html = `
<h2>Ali Osman Hazir</h2>
<p>yas: 34</p>
`;
console.log(html);