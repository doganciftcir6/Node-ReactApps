//Map metotu dizinin içindeki elemanları aynı foreach gibi tek tek dönerek değişiklik yapabiliyoruz.
//mesela dizinin içerisindeki elemanların 50 den büyük olanları item/2 olarak yeniden dizayn ettik.

const dizi = [12,45,78,95,42,75];
//map metotu parametre içine callback bir fonksiyon ister.
const yeniDizi = dizi.map((item) =>{
    console.log(item);
    if(item>50){
        return {yeniDiziEleman:item/2, eskiDeger:item}
    }
    else{
        return {eskiDiziEleman:item}
    }
});
//bu işlem sonucunda nesne alan dizi oluştu 6 nesnesi bulunan bir dizi yani. Nesnelerin özellikleri 50 den küçük ve büyük olma durumuna göre 2 farklı şekilde oluştu. 50 den küçükse eskiDiziEleman: 12, eskiDiziEleman: 45 şeklinde, 50 den büyükse yeniDiziEleman:39, eskiDeger:78 olarak oluştu.
//Yani map metotuyla dizi içerisinde istediğimiz gibi değişiklik yapabiliyoruz.
console.log(yeniDizi);


//direkt sayı döndüren bir yapı da yapabiliriz nesne döndürmeyen.
const yeniDizi2 = dizi.map((item) =>{
    console.log(item);
    if(item>50){
        return item/2
    }
    else{
        return item
    }
});
//işlem sonucunda 6 elemanlı bir dizi oluştu 50 den büyük olan elemanlar ikiye bölünde 50 den küçük olanlar aynen kaldı.
//eğer burda else kullanmasaydık 50 den küçük olanlar undefined olarak gelecekti.
console.log(yeniDizi2);


//nesne alan bir dizide işlem yapalım
const nesneDizisi = [
    {isim:"Ali", uyelik:true, ucretOdedi:true},
    {isim:"Osman", uyelik:false, ucretOdedi:false},
    {isim:"Esra", uyelik:true, ucretOdedi:false},
    {isim:"Oyku", uyelik:false, ucretOdedi:true},
    {isim:"Fatma", uyelik:true, ucretOdedi:false},
];
//ücret ödeyip ödemediğine bakarak kullanıcıyı üye yapıp yapmamayı sağlayacağım
let yeniDizi3 = nesneDizisi.map((item) => {
    if(item.ucretOdedi){
        item.uyelik = true;
    }
    else{
        item.uyelik = false;
    }
    return item;
});
//geriye tüm nesneler yani 6 nesnesi olan bir dizi döner eğer kullanıcı ücretödedi özelliği true ise üyeliği true olur, eğer ücretödedi özelliği false ise üyelik özelliği false olur şeklinde değişiklik yapmış olduk.
console.log(yeniDizi3);
