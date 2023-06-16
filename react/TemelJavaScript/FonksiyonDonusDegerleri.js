//fonksiyon içerisinde belirli işlemler yapıp o işlemin sonucunu döndürmek bu noktada return anahtar sözcüğünü kullanıyoruz.

//hesapladığı alanı geriye döndüren fonksiyon.
const KupTabanAlani = function(genislik,en){
    let alan = genislik*en;
    return alan;
};
//bu fonksiyondan dönen sonucu bir değişkende tutabiliriz
let alan = KupTabanAlani(5,8);
console.log(alan);

//fonksiyonu daha kısa da yapabiliriz. ayrıca bir fonksiyondan dönen değeri diğer fonksiyonun parametresinde kullanabiliriz veya bir fonksiyonun içinde başka bir fonksiyonu kullanabiliriz.
const KupHacmiFonk = function(yukseklik,alan){
    return yukseklik*alan;
};
let kupHacim = KupHacmiFonk(50,alan)
console.log(kupHacim);