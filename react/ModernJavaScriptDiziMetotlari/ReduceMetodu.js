//bu dizinin içerisindeki elemanalara teker teker erişmek ve elemanları toplamak istiyorum bunun için reduce metotunu kullanabiliriz.
//reduce metotu parametresine callback fonksiyon ister.
//callback fonksiyonu içerisine 2 parametre alır deger ve eleman olarak.
const dizi = [12,45,78,95,42,75];

//ilk parametre bizim bir seferlik dizinin ilk elemanını içinde tutuyor. Eğer ilk parametre dizinin ilk elemanını tutarsa eleman diye gönderdiğimiz ikinci parametre ise dizinin ikinci elemanından başlayarak geriye kalan diğer elemanlara sahip oluyor. 
//ilk parametre + eleman dediğimizde ilk 2 sayının toplanması sonra çıkan sonucla elemanı toplayarak geldiğimizde buradaki bütün elemanları toplamış olabiliriz.
//eğer reduce metotunun ikinci parametresini 0 olarak girersek deger parametresi yani ilk deger 0 olarak alınır. Eleman parametresi ise dizinin ilk elemanından yani 12 den başlar. Bütün dizi içerisindeki elemanları dönmüş olur.
const sonuc = dizi.reduce((deger,eleman) => {
    console.log("deger" + deger);
    console.log("eleman" + eleman);

    deger = deger+eleman;
    return deger;
}, 0);
console.log(sonuc);