//belirli bir döngünün aşamasında belirli bir şeye eriştikten sonra döngüyü devam ettirmek istemiyorsak break anahtar sözcüğünü kullanabiliriz.
//Continue ise yine döngüden çıkmamızı sağlıyor ama breaktan farkı döngünün o anki aşamasından çıkılıyor alttaki satırlar okunmuyor ve döngü devam ediyor.
const dizi = [1,45,0,100,34,56,78,23];

for (let i = 0; i < dizi.length; i++) {
    if(dizi[i]===0){
        continue;
    }
    //yukarıda if içine girdiğinde continue çalıştığında aşağıdaki log kodu çalışmaz. Ancak bir sonraki döngüde yine log işlemi yazılmaya devam eder yani 0 3. indekste olduğu için 3. aşamadaki log kodu çalıştırılmaz çünü ordaki continue görülecek.
    console.log(dizi[i]);
    // if(dizi[i] === 100){
    //dizideki 100 den sonraki elemanları yazmamış olacağız.
    //     break;
    // }
}
