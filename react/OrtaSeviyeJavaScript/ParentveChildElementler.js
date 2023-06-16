//bu konunun anlatımı için index6.html sayfasını kullandık.
//body etikenini içerisinde yer al bütün etiketler bodynin childi olur.
//h1 in parent elementi ise üzerinde bulunan kapsayıcı eleman olan div ve body olur.
//yani child ile içerideki etiketlere parent ile de köke yukarıya doğru gidicez. Sibling ise bir parentın içerisindeki aynı seviyedeki kardeş neselerdir. Burada div kapsayıcı etiketinin içerisindeki siblingler h1,p,div elementleri olacak.

//bunlara js ile nasıl erişeceğiz
//querySelector olduğu için ilk karşılaştığı divi yakalar.
const div = document.querySelector("div");
//bu divin childlarına erişmek HTMLCollaction olarak erişiriz.
console.log(div.children);
//ben bunu bir dizi olarak ele almak istersem Array.from() ile arraye benzeyen ama array olmayan bütün nesnelerimizi arraye çevirebiliyoruz.
console.log(Array.from(div.children));
//artık indexli yapı mevcut bu indexli yapıyla istenilen children elementinin özelliklerine ulaşabiliriz. Çocuk elementinin çocuklarına erişmek mesela.
console.log(div.children[4].children);
//children elementin parent ve kardeşlerini bulalım
const h4 = document.querySelector("h4");
console.log(h4.parentElement);
//parent elementinin parent elementine de ulaşabiliriz
console.log(h4.parentElement.parentElement);
//kardeş elementine erişelim nextElementSibling bir sonraki kardeşe erişebiliyoruz
console.log(h4.nextElementSibling);
//kardeş etiketinin childrenlarına erişip 3. childrena erişebiliriz mesela.previousElementSibling ile de o elementin bir önceki kardeşine erişmiş oluruz
console.log(h4.nextElementSibling.children[3].previousElementSibling);
