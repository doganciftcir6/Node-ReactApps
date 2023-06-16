const personeller = ["Ali","Osman","Esra"];

//spreadsyntax ile dizinin içindeki elemanlara toplu bir şekilde erişmiş oluyorum.
console.log(...personeller);

//uyeler dizisinin elemanlarını personeller dizisindeki elemanlardan ve ayrıyetten Oyku elamanından oluşsun istiyorum ancak personeller burda bir dizi olduğu için array türünde bu dizinin içerisine yerleşir.
const uyeler = [personeller,"Oyku"];
console.log(uyeler);
//bu noktada spreadsyntax ile direkt personeller dizisindeki elemanları array olmayacak şekilde yeni uyeler dizisine atabirilim. string olarak.
const uyeler2 = [...personeller,"Oyku"];
console.log(uyeler2);

//nesnelerde de kullanabiliyoruz
const calisan = {ad:"Ali", yas:30, birim:"Bilgi Islem"};
const calisanKlon = {...calisan, unvan:"Mudur"};
calisan.unvan = "Memur";
//böyle spreadsyntax kullanmadan bu atama işlemini yaparsak iki nesneyede aynı değişiklikler uygulanıyor ama spreadsyntax kullandığımızda sadecce calisan nesnesine Unvan:Memur geldi.
//yani burda 2 nesne ayrı referans alıyor biribirnden etkilenmiyorlar.
console.log(calisan);
console.log(calisanKlon);
