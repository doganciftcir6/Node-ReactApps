//sort ile diziyi küçükten büyüğe olacak şekilde sıralayabiliriz.
//reverse ise dizinin tersini alabiliriz. Yani sondaki elemanı başa baştaki elemanı sona geçirebiliriz.

const metinDizisi = ["metin","ali","ahmet","esra"];
console.log(metinDizisi.sort());
//büyükten küçüğe göre sıralamak
console.log(metinDizisi.reverse());

const sayiDizisi = [12,78,45,71,96,25,34,43];
console.log(sayiDizisi.sort());

const nesneDizisi = [
    {isim:"ali", not:58},
    {isim:"osman", not:88},
    {isim:"esra", not:65},
    {isim:"oyku", not:25},
];
//a parametresi ilk nesnemi b ikinci nesnemi alır dizimdeki. ilk nesne ile ikinci nesneyi kıyaslamış olur ardından a parametesi önceki kıyastan galip geleni alır b parametresi ise dizideki 3. elemanı alır ve yine kıyaslama olur. Aynı bu mantıkla tüm dizide dönülür.
nesneDizisi.sort((a,b)=>{
    if(a.not < b.not){
        return -1;
    }
});
console.log(nesneDizisi);