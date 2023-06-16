let sayi = 30;

// == tiplere bakılmadan karşılaştırma yapar
// === tiplerininde eşit olup olmadığına bakılır.

//gevşek karşılaştırma = tiplere bakılmadan karşılaştırma yapar
//string ifadeleride karşılaştırabildiğimiz için gevşek denilir
console.log(sayi == 30);   //true
console.log(sayi == "30"); //true gelir.

//sıkı karşılaştırma = tiplerininde eşit olup olmadığına bakılır.
//farklı olarak string ifade ile number değişkeni karşılaştırdığımızda false geldi.
console.log(sayi === 30);   //false
console.log(sayi === "30"); //false