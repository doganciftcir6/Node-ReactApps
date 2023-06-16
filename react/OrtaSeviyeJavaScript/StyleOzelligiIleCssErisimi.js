//bu konunun anlatımı için index4.html sayfasını kullandık.
//bu css atama özelliğni getAttribute ile önceki derste yapmıştık ama bu şekilde de kullanım mevcuttur.

//content nesnesine erişelim
const content = document.querySelector(".content");
//bu elemanın stlye özelliklerine ulaşmak (tüm style özellikleri gelir boş olsa bile)
console.log(content.style);
//herhangi bir css özelliğine ulaşıp değer atmak
content.style.border = "2px solid #eeeeee"


//baslik elemanının bazı css bilgilerine değer atalım
const baslik = document.querySelector(".nesne");
baslik.style.marginLeft = "100px";
baslik.style.fontSize = "50px";


//li lerimizi rastgele renklerden oluşturalım örnek olarak
const li = document.querySelectorAll("li");
//kaç tane li elemanımız varmış bakalım
console.log(li.length);
li.forEach(item =>{
    //0 ile 255 arası sayı üreticez ve yuvarlama yaparak 0. ifadesinden kurtulucaz.
    let rast1 = Math.round(Math.random()*255); 
    let rast2 = Math.round(Math.random()*255); 
    let rast3 = Math.round(Math.random()*255); 
    item.style.color = `rgb(${rast1},${rast2},${rast3})`;
});