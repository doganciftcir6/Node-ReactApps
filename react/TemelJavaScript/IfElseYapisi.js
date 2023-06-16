//if else yapısıyla bir şeyi kıyaslayıp doğru ise bir kod çalıştırabiliriz yanlış ise farklı bir kod çalıştırabiliriz.
//if parantezinin içi true ise blok çalışıyor false ise else kısmına geçiyor.
let sayi = 20;
if(sayi<30){
    console.log("sayi 30 dan kücük");
}
else{
    
}
//örnek
let parola = "123qwer";
if(parola.length >= 8){
    console.log("parola 8+");
}
else{
    console.log("parole 8-");
}

//else if blokları 
let dizi = ["Ali", "Osman", "Esra"];
if(dizi.length == 4){
    console.log("dizi 4 elemanlidir.");
}
else if(dizi.length == 3){
    console.log("dizi 3 elemanlidir.");
}
else if(dizi.length == 2){
    console.log("dizi 2 elemanlidir.");
}
else if(dizi.length == 1){
    console.log("dizi 1 elemanlidir.");
}
else{
    console.log("dizide hiç eleman yoktur veya eleman sayisi 4 ten büyüktür.");
}