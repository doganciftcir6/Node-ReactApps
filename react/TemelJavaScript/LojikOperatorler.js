//ve && , veya ||, değil !
let sayi1 = 10;
let sayi2 = 20;

//sayi1 büyük 5 ve sayi2 küçük 39
//bu 2 karşılaştırma ve ifadesi kullandığımız için ikiside true olmak zorunda birisi bile false olursa if bloğuna girilmez. Ama eğer burda veya kullansaydık 2 karşılaştırmadan en az 1 tanesi true olursa if bloğu çalışır.
if(sayi1>5 && sayi2<39){
    console.log("İslem basarili.");
}

//örnek, burada .includes c#taki contains yani içeriyorsa gibi düşünebiliriz aynı işi yapıyor.
let parola = "1234qwe";
if(parola.length > 8 && parola.includes("@") || parola.includes("!") || parola.includes(".")){
    console.log("parola uygun.");
}
else{
    console.log("parola uygun degil.");
}

//değil işareti ! kullandığımızda olaylar tam tersine dönüyor. True olan ifadeyi test çevir false yap diyoruz burada.
console.log(!true);
//örnek burada say 4 ten küçük değilse demiş oluruz.
let say = 10;
if(!say<4){
    console.log("uygundur");
}