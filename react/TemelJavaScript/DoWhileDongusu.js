//while döngüsünde yazdığımız kod çalışırken önce while döngüsündeki karşılaştırmaya bakılıyor. Daha sonra süslü parantezlerin içi işlenir. Ancak do while döngüsünde do ile belirttiğimiz süslü parantezler önce bir çalışır hiç bir karşılaştırmaya bakılmaz daha sonra while parantezi içindeki karşılaştırmaya bakılır eğer parantez içi true olarak döndüyse tekrar yukarıya çıkar ve süslü parantezlerimiz çalıştırılır ta ki while parantezi false olarak gelip döngüden çıkılana kadar. Yani özetle while da önce karşılaştırma yapılıyor sonra kod satırları çalıştırılıyor ancak do while da ise önce kod satırı çalışıyor sonra karşılaştırmaya göre kod satırına tekrar dönülüyor ya da kod aşağı doğru devam ediyo.
let i = 0;
do{
    console.log(i);
}while(i>5);
//5 ten başlayan bir değerimiz var ve 99 a kadar sayıların toplamını bulucaz.
let sayi = 5;
let toplam = 0;
do{
    toplam += sayi;
    sayi++;
}while(sayi<100);
console.log(toplam);
