//filter metotu bir dizinin içerisindeki elemanları filtrelememizi sağlıyor.

const notlar = [45,78,96,14,52,56,87];
//bu notları filtreleyerek yüksek notlar değişkenine sadece yüksek olan notları aktarıcam 80 den yukarı olanlar.
let yuksekNotlar;
//filter metotu aynı foreach gibi dizi elemanları içerisinde teker teker dönecek not parametresi ise her bir itemi temsil edecek.
//filter metotu bilgiyi geriye dizi olarak döndürür.
//yani filter metotu ile tüm dizi elemanları tek tek gezerek bir filtreleme yaparak başka bir diziye aktarım yapılır günün sonunda.
//filter metotu parametre içine callback bir fonksiyon ister.
//belirli bir filtreyi sağlayanlar günün sonunda bize döner. Dizi olarak.
yuksekNotlar = notlar.filter((not) => {
    console.log(not);
    return not>80;
});
console.log(yuksekNotlar);

//elemanları nesne olan dizilerde inceleyelim
let ogrenciler = [
    {isim:"Ali",not:45},
    {isim:"Osman",not:78},
    {isim:"Esra",not:96},
    {isim:"Oyku",not:14},
    {isim:"Tufan",not:52},
    {isim:"Omer",not:56},
];
let yuksekNotAlanOgrenciler = ogrenciler.filter((ogr)=>{
    return ogr.not > 80;
});
//burada geriye 6 tane nesne elemanı bulunan bir dizi geriye döner. ogr. diyerek bu dizinin özelliklerine erişebilirim.
//bu şekilde filtreleme yapıldığında geriye sadece notu 80 den büyük olan nesne dönecektir. Nesnenin tamamı döner karıştırmayalım.
console.log(yuksekNotAlanOgrenciler);

