//bu konunun anlatımı için index.html sayfasını kullandık.

//querySelector ile p nesnesinin tamamına erişebiliriz class aracılığıyla.
//querySelector sadece 1 adet etiket yakalayabiliyor.
const ad = document.querySelector(".ad");
console.log(ad);
//eger birden fazla etiket yakalamak istiyorsak querySelectorAll kullanıyoruz. Burada tüm li etiketlerini seçmiş oluyoruz. Burda elemanlar NodeList türünde geldiği için foreach ile gezme işlemi yapabiliriz.
const kurslar = document.querySelectorAll("li");
console.log(kurslar);
//querySelector ve querySelector all etiketin tüm özelliklerini getirir. Ben bu li lerin sadece li etiketli versiyonuna ulaşmak için, direkt 3 li yi yakalamış olduk. Tipi NodeList olduğu için foreach ile gezebiliyoruz.
kurslar.forEach(kurs => {
    console.log(kurs);
});
//Bu kurslara teker tekerde ulaşabiliriz.
console.log(kurslar[2]);

//Id ye göre etiketleri yakalayalım yine querySelector kullanabiliriz ama farklı olarak getByElementId metotunu kullanabiliriz. querySelector kullansam parametre içinde # kullanmam gerekirdi ama bu fonksiyonda buna gerek kalmıyor.
const yas = document.getElementById("yas");
console.log(yas);

//bütün p etiketlerini çağırmak istiyorum. getElementsByTagName ile tüm p etiketlerini çağırabiliyorum. Bu bu noktada HTMLCollection olarak gelecektir tüm elemanlar. [] koyarak sırasıyla tüm p etiketlerini tek tek olarak ta çağırabilirim.
const paragraflar = document.getElementsByTagName("p");
console.log(paragraflar[0]);
//burada foreach çalışmaz. Dikkat edelim HTMLCollection tipinde olduğu içni foreach çalışmaz.
paragraflar.forEach(p=>{
    console.log(p);
});

//classname ile çağırma yapalım burda parametre içinde nokta yazmıyoruz querySelector fonksiyonu olmadığı ve bu getElementsByClassName zaten sadece classları çağırabildiği için
//bu getElementsByClassName birden fazla eleman çağırma işlemi yapacaktır. HTMLCollection tipinde olur. foreach atılmaz.
const nesne = document.getElementsByClassName("nesne");
console.log(nesne[0]);