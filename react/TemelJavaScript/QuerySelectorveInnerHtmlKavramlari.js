//bunu anlamak için index.html sayfasını kullanıcaz. bu scripti orada çağırdım.
//oradaki personel classlı p etiketini queryselector kullanarak erişebiliyoruz.
//queryselector etiketlere sadece .class ile değil #id ilede etikete erişim sağlayabiliyoruz. Ayrıca direkt etiket ismini yazarak etikete ulaşım da sağlayabiliyoruz ancak Eğer 2 tane p etiketi varsa sadece ilk p ye erişmiş olduk.

const p = document.querySelector(".personel");
console.log(p);
const p2 = document.querySelector("#personelId");
console.log(p2);
const p3 = document.querySelector("p");
console.log(p3);

const o = document.querySelector(".ogrenci");
console.log(o);

//InnerHtml kullanarak ben bu eriştiğim etiketlere değerlikler aktarabilirim yani içerisine yazılar yerleştirebilirim. Ayrca innerhtml yanında innertext mecvut o da innerhmtl gibi bu etiketlere yazı yazmamızı sağlıyor.
//sonradan tekrar aynı elemana yazı atadığımızda üzerine yazar mevcut değeri değiştirir yan yana yazmaz yani.
//bunların farkı innerText "<b>AOS Game</b>" 'ı direkt mevcut değeri değiştirerek normal bir yazıymış gibi alıyor. Kalınlaştırma işlemini yapmıyor direkt etiketle birlikte yazıymış gibi yazıyor. Ama aynı işi İnnerHtml ile yaparsak mevcut değer yine değişir ama etiketleri yazmaz AOS Game yazısını bir b etiketi içerisine alarak kalın şekilde yazar fark budur.
p.innerText="Ali";
p.innerText = "Hazir";
p.innerText = "<b>AOS Game</b>";

o.innerHTML = "Osman";
o.innerHTML = "Hazir";
o.innerHTML = "<b>AOS Game</b>";