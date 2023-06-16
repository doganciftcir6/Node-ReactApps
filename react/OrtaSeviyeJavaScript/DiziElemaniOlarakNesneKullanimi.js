let kullanicilar = [
    {isim: "Ali", soyisim: "Hazir",yas:30},
    {isim: "Osman", soyisim: "Hazir",yas:30},
    {isim: "Esra", soyisim: "Hazir",yas:25},
];

//3 nesne barındıran diziyi oluşturduk.
//ilk nesneye ulaşmak
console.log(kullanicilar[0].isim);

//bir başka nesne oluşturup bunu dizimize koyalım ekleyelim.
//sonradan eklediğin nesnenin ya da önceki nesnelerin özelliklerini istediğim gibi değiştirebilirim hata vermez. İlla aynı özelliği vermek zorundayız diye bir şey yok yani burda yaş yerine mail özelliği gösterilir.
let kullanici = {
    isim:"Omer",
    soyisim:"Ozgun",
    mail:"omerozgun@gmail.com"
};
kullanicilar.push(kullanici);
console.log(kullanicilar);