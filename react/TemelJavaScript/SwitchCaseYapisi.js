//ard arda sıralanmış iflerin daha kolay bir kullanımı olarak karşımıza çıkar.
let not = "CC";

if(not == "AA"){
    console.log("notunuz AA");
}
if(not == "BB"){
    console.log("notunuz BB");
}
if(not == "CC"){
    console.log("notunuz CC");
}
if(not == "DD"){
    console.log("notunuz DD");
}
if(not == "FF"){
    console.log("notunuz FF");
}

//böyle bir yapıda if yerine switch case yapısı kullanırız.
//switchin parantezine hangi değişkeni kontrol edeceksek onu yazıyoruz.
//case ise kontrol ettiğimiz değikenin değerinin ne olduğunu yazıyoruz.
//kontrolde eğer AA geldiyse ne olacağını belirtmek için : yapıyoruz.
//case bloğu çalıştığında onun altındaki caselerda çalışır bu yüzden her bir case de break kullanmalıyım ki sadece o case çalışsın çalışan case in altındaki caseler çalışmasın break ile karşılaşıldığında swtich yapısından çıkılır.
//Default özelliği ise eğer not bu 5 farklı case in hiç birine uymazsa Default yapısı çalıştırılır. Caseleri if ve else if olarak düşünebiliriz defaultu ise else olarak düşünebiliriz.
//dafaulttan sonra da case yazabiliriz ancak default olduğu anda onun altındaki caselar çalışmamasını istiyorsak break kullanmayı unutmayalım.
switch(not){
    case "AA":
        console.log("notunuz AA");
        break;
    case "BB":
        console.log("notunuz BB");
        break;
    case "CC":
        console.log("notunuz CC");
        break;
    case "DD":
        console.log("notunuz DD");
        break;
    case "FF":
        console.log("notunuz FF");
        break;
    default:
        console.log("notunuz henüz girilmedi");
        break;
    case "BA":
        console.log("notunuz BA");
}