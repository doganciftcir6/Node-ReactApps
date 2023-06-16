//sort ile dizinin elemanları arasında bir sıralama gerçekleştiriyoruz. Bu dizi metin, dizi, nesne dizisi olabilir.
//burada küçükten büyüğe doğru bir sıralama mevcuttur
const metinDizisi = ["metin","ali","oyku","esra","ahmet"];
metinDizisi.sort();
console.log(metinDizisi);
//büyükten küçüğe sıralama istiyorsam. Önce sıralama işlemi yapıp daha sonra reverse metotu ile bu diziyi tam tersi şekilde çevirebiliyorum.
metinDizisi.reverse();
console.log(metinDizisi);

//sayılarıda sıralayabiliyoruz
const sayiDizisi = [12,45,78,94,74,14,25,26];
console.log(sayiDizisi.sort());

//nesne dizileri
const nesneDizi = [
    {isim:"ali", not:56},
    {isim:"osman", not:96},
    {isim:"esra", not:78},
    {isim:"oyku", not:13},
];
//bunu klasik sort ile sıralama yapamıyoruz nesne dizisinde.
//isim mi yoksa not property ine göre hangisine göre sıralama yapacağımızı belirtmemiz lazım
//bunun için sort metotu parametresinde bir callback fonksiyon geçeriz. Bu fonksyiyonun ilk parametresi karşılaştırma yapılacak ilk elemanı ikinci parametre ise ikinci elemanı temsil eder.
//yani sort dizi nesnelerinde tek tek dönecek 2 nesneyi parametre alarak bunların kıyaslamasını yapacak şekilde ilerleyecek
//a parametresi ilk nesnemi b ikinci nesnemi alır dizimdeki. ilk nesne ile ikinci nesneyi kıyaslamış olur ardından a parametesi önceki kıyastan galip geleni alır b parametresi ise dizideki 3. elemanı alır ve yine kıyaslama olur. Aynı bu mantıkla tüm dizide dönülür.
nesneDizi.sort((ilk,ikinci) =>{
    console.log(ilk);
    console.log(ikinci);
    if(ilk.not < ikinci.not){
        return -1;
    }
    else if(ilk.not > ikinci.not){
        return 1;
    }
    else{
        return 0;
    }
});
console.log(nesneDizi);
