//daha önce reguler fonksiyon kullanmıştık
var DaireAlaniHesapla = function(r){
    return 3.13*r**2;
};

//arrow fonksiyon burada function anahtar sözcüğü kullanılmaz direkt olarak parametre parantezleri açılır sonra okumuz oluşturulur sonrasında süslü parantezlerle fonksiyonun yapacağı işlem tanımlanır.
var DaireAlaniHesaplaArrow = (r) => {
    return 3.13*r**2;
};
//arrow fonksiyonlarda dönüş yapmak için return kullanmaya gerek yok.
//fonksiyon tek bir parametre alacaksa parantezleri kullanmayabiliriz.
var KareAl = a => a**2;
console.log(KareAl(5));

//örnek
const Hesapla = (bir,iki,islem) => {
    let sonuc;

    switch(islem){
        case "+":
            sonuc = bir+iki;
            break;
        case "-":
            sonuc = bir-iki;
            break;
        case "*":
            sonuc = bir*iki;
            break;
        case "/":
            sonuc = bir/iki;
            break;
        default:
            sonuc = "islem gecerli degil."
    }
    return sonuc;
};
let sonuc = Hesapla(45,78,"*");
console.log(sonuc);