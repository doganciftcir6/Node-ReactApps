//bunu anlamak için index2.html sayfasını kullanıcaz. bu scripti orada çağırdım.
//html sayfasında bulunan ul etiketine ulaşalım
const ul = document.querySelector(".insanlar");

const insanlar = ["Ali","Osman","Esra","Oyku"]

let html = ``;

insanlar.forEach(function(insan){
    //ard arda ekleme yapabilmek için += yani önce Ali li etiketi içinde yazılacak sonra foreach tekrar dönecek bu sefer 2. indekste olacak ve Osman += dediğim için önceki li nin altında yeni bir li olışacak ve içinde osman yazılacak bu şekildek dizi elemanlarının sayısı kadar yani hepsi aynı işlemi görecek.
    html += `<li style="color:green;">${insan}</li>`;
});
console.log(html);

//ul etiketinin içine bu oluşan 4 tane li etiketlerini yazıyoruz.
ul.innerHTML = html;