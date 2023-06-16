//bu konunun anlatımı için index3.html sayfasını kullandık.
//etiketlerin yanlarına yazacağımız class, style, id, name gibi özelliklere attribute denir. Bunlar hiç olmayabilir, bir tane olabilir veya birden fazla olabilirler.

const nesne = document.querySelector(".nesne");
//nesne classı ile elemana ulaştık bu elemanın attributelarına ulaşmak için, tüm attributelarına ulaşabiliriz veya örnek olarak class yazarak class attributeuna ulaşabiliyoruz.
console.log(nesne.getAttribute("class"));
//attribute değiştirmek için, ilk parametre hangi attributeunu değiştirmek istediğimiz ikinci parametre ise bu attribute a yeni olarak ne atamak istediğimiz
nesne.setAttribute("class","kullanici");
console.log(nesne.getAttribute("class"));

//style attributeunu degistirme örneği yapalim
const kurslar = document.querySelector(".kurslar");
//kurslar classlı elemanın styleı olmadığı için null verdi.
console.log(kurslar.getAttribute("style")); 
//herhangi bir style tanımı olmamasına rağmen biz bu özelliği değiştirebiliriz.
kurslar.setAttribute("style","color:red");

//li leri yakalayıp attributelarını değiştirebiliriz. Yani birden çok elemanın da attributeunu aynı anda değiştirebiliriz. querySelector kullandıgımız için tüm elemanları foreach ile gezmek mümkün.
const li = document.querySelectorAll("li");
li.forEach(l=>{
    l.setAttribute("style","color:green");
});