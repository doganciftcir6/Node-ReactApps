//bu konunun anlatımı için index2.html sayfasını kullandık.

//öncelikle etikete ulaşalım
const ad = document.querySelector(".ad");
//innerText özelliği etiket içindeki texte ulaşıyor. Bu hem okunabilir hemde değiştirilebilir bir özellik.
console.log(ad.innerText); 
//şimdi bu etiketin içeriğini değiştirelim. Üzerine yazmış oluyoruz yeni değeri.
ad.innerText = "Ali Osman"

//yukarıda eski içeriği silip yenisini onun yerine yazdırıyoruz ama ben eski içeriğin silinememsini kalmasını istersem yeni içeriğide eski içeriğin yanına yazdırmak istersem aşağıdaki gibi kullanım yaparım
const yas = document.querySelector("#yas");
yas.innerText = yas.innerText + " - 1990 dogumlu";
//ancak bunu böyle uzun uzun kullanmak yerine asağıdaki gibi += kısayolunu kullanabilirdik.
yas.innerText += " -1980 dogumlu";

//bir kalın harflerle üyelik tarihi bilmem ne yazmak istesem yani html etiketlerini kullanmak istesem innerHTML kullanmam gerekir.
const content = document.querySelector(".content");
//bunun innerText ve innerHTML aynı olarak gözükecektir.
console.log(content.innerText,content.innerHTML);
content.innerHTML += `Uyelik Tarihi <b>30 Mayis</b> 2018`

//listemin altına li etiketlerimin altına yeni bir eleman eklemek istersem
let kurslar = ["Socket IO", "Phaser 3"];
const ul = document.querySelector("ul");
kurslar.forEach(item => {
    ul.innerHTML += `<li>${item}</li>`
});

