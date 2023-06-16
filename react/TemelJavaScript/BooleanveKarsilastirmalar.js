//bool true ve falsetan oluşur. karşılaştırma doğruysa true yanlışsa false ifadesi ortaya çıkar.

let yazi = "alisindfgsdfdsf@dsfdfgfgfdgfd-fdgfgdgfdg"
//string ifade içinde @ işareti var mı diye kontrol yapmak istediğimde includes fonksiyonunu kullanırız. ifade varsa true yoksa false döndürür.
let sonuc = yazi.includes("@");
console.log(sonuc);

//dizi içerisinde 5 varsa geriye true döner.
let dizi = [3,4,5,6,7];
let sonuc2 = dizi.includes(5);
console.log(sonuc2);


let sayi = 40;
//sayi değiskeni 30 a eşit olmadığı için false döner.
let sonuc1 = sayi == 30;
console.log(sonuc1);
//sayi değişkeni 30 a eşit olmadığı için true döner.
sonuc1 = sayi != 30;
console.log(sonuc1);
//sayi değişkeni 30 dan küçük veya eşit olmadığı için geriye false döner.
sonuc1 = sayi <= 30;
//sayi değişkeni 30 dan büyük veya eşit olduğu için geriye true döner.
sonuc1 = sayi >= 30;

//stringtede karşılaştırma vardır isim değişkeni kazima eşit olduğu için true döner.
let isim = "kazim";
console.log(isim == "kazim");
//string ifadelerin baş harflerine göre alfabeye göre küçük veya büyüklüğe göre karşılaştırılır k harfi alfabede daha ileride olduğu için a dan daha büyüktür. ASCII tablosu baz alınır. Küçük harfler daima büyük harflerden büyüktür. Eğer ilk harfler aynısya bu sefer ikinci karaktere bakılarak karşılaştırma yapılır.
console.log(isim > "ali");
//65 > 97 olacak geriye false döner.
console.log("A">"a");