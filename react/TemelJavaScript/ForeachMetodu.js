//foreach bir dizinin elemanlarını teker teker gezmemizi sağlayan bir metot.
let dizi = [34,4,55,667,34,43,67];
//for döngüsü ile böyle yapardık.
for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}

//foreach çok daha basit oluyor. Foreach dizinin eleman sayısı kadar otomatik olarak döngüyü döndürüyor.

// dizi.forEach(function(){
//     console.log("merhaba");
// });

//arrow fonksiyonun parametresi olarak eleman diyoruz. Buradaki eleman c#taki foreach in yani foreach(var item in items) ın item kısmı oluyor dizinin her bir elemanını temsil ediyor. buradaki itemsi yani diziyi iste baştaki dizi. diyişimiz temsil ediyor. Mantık aynı sadece yazılımlar böyle farklı.
dizi.forEach((eleman) => {
    console.log(eleman);
});
//iki elemanlı kullanımda mevcut ikinci parametre o dizinin o anki indeksini numarasını temsil eder. 0.eleman 1.eleman 2.eleman gibi
dizi.forEach((el,index) => {
    console.log(index);
});
//callback fonksiyon kullandığımız gibi dışarıdan harici bir fonksiyon tanımlayıp foreach içerisindede tetikletebiliyoruz.
const DiziGetir = (el,i) => {
    console.log(`${i} indexli eleman ${el}`);
};
//burda fonksiyonu çağırırken parantezleri yazmamamız gerekiyor. Dizi 7 elemanlı olduğu için foreach bu fonksiyonu 7 kere çalıştıracaktır.
dizi.forEach(DiziGetir);
