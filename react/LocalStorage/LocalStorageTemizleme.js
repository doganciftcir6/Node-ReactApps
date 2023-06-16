//localstoragei temizlemediğimiz sürece ne yaparsak yapalım değerler orda kalacaktır.

//application menüsü altında clearall seçeneği var ordan localstoragei  temizleme işlemi yapabiliriz. veya kod ile yapabiliriz.
localStorage.setItem("yas",30);
localStorage.setItem("isim","ali");
let yas = localStorage.getItem("yas");
console.log(yas);
//silme islemini removeItem(key) metotuyla yapabiliyoruz parametre içine değerin key bilgisini yazmak gerekli aynı get isleminde olduğu gibi.
localStorage.removeItem("yas");
//tüm değerleri silmek istiyorsam clear() metotunu kullanabilirim tüm localstoragei temizler.
localStorage.clear();