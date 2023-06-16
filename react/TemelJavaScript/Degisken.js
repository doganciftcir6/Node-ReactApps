//var anahtar sözcüğü function scopetur yani bir fonksiyonun scopeu içeirisinde geçerlidir. local bir değişken şeklinde kullanılır. Değeri sonradan değişebilir. Aynı değiken ismi sonradan tekrar tanımlanabilir hata vermez.
var intDegisken = 10;
var intDegisken = 20;
intDegisken = 30;
var stringDeskiken = "ali osman";
var boolDegisken = true;
console.log(intDegisken);
//let anahtar sözcüğü vardan farklı olarak blok scopetur. yani süslü parantez içerisinde tanımlanmışsa sadece o süslü parantez içerisinde çalışır.Tanımlanan değiikenin deeğeri sonradan değiştirilebilir ancak Var gibi sonradan tekrar tanımlama yapılamaz. Vardan farklı olarak if veya for içerisinde yapılmış bir tanımlamaya if veya for scopeu dışından ulaşılamaz. Haosting ömekanızmasına sahip değildir.
let pi = 3;
pi = 10;
console.log(pi)
//const anahtar sözcüğü var ve letten farkı sabit tanımlamak için kullanılır. tanımlanan değişkenin değeri değiştirelemez.
const deneme = 10;

//var let farkı
//burada isim değikenine dışarıdan erişemiyoruz ama bunu var yapsaydık erişebilirdik.
{
    let isim = "ali";
}
console.log(isim)