//nodejste global nesnesi çok kullanılır.
console.log(global);
//Global nesnesinin içersinde setınterval() fonksiyonu var, SetTimeOut() fonksiyonu var ve bunların clearları bulunyor.

//SetTimeOut() ile belirlediğimiz süre sonrasında bir işlem yaptırabiliyoruz. İlk parametrede fonlsiyon var ikinci parametrede milisaniye cinsinden ne kadar gecikme olacağı timeout süresi var. 
//3 saniye sonra bu fonksiyonun içerisindeki kodları çalıştır demiş oluyoruz.
global.setTimeout(() => {
    console.log("3 saniye gecti");
}, 3000);


//direkt kullanımda yapabiliriz bunları global yazmamıza gerek yok
//setInterval() ise yine bir fonksiyon ve ikinci parametre olarak milisaniye cinsinden zaman alıyor.
//bu fonksiyon her 0.5 saniye geçtiğinde parametresinin içindeki fonkisyonun kodlarını çalıştırır.
setInterval(() => {
    console.log("0.5 saniye gecti");
}, 500);

//istersek bu setIntervali durduma işlemi yapabiliyoruz. clearInterval() fonksiyonundan faydalanıyoruz.
const sayac = setInterval();
setTimeout(() => {
    clearInterval(sayac);
}, 3000);


//__dirname bizim bu dosyamızın üst yolunun tamamı olmuş oluyor. Dosyamızın bir üst klasörüne kadar olan yol.
console.log(__dirname);


//__filename ise şuanki bulunduğum dosyayada dahil tüm yol olmuş oluyor.
console.log(__filename);