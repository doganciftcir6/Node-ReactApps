//rest parametreleri sayesinde fonksiyona sınırsız parametre ekleyebiliyoruz.

const KaresiniAl1 = (sayi1,sayi2) => {
    console.log(sayi1,sayi2);
    //burada 2 return yapabilmek için map işlemi yapmam lazım
    // return sayi1*sayi1;
    // return sayi2*sayi2;
    //map işlemi için diziye ihtiyacım var
    let dizi = [sayi1,sayi2];
    return dizi.map((item)=>{
        return item*item;
    });
}
//burda 2 den fazla parametre gönderemem
console.log(KaresiniAl1(3,5)); 

//yukarıdaki işlem farklı bir parametre yazmamızı engeller ve işlem kalabıklığı yapar. ...sayilar şeklinde rest parametresi tanımlayabilirim.
//bu sayilar yerine istediğim kadar sayı gönderebilirim fonksiyonu çağırarak.
const KaresiniAl2 = (...sayilar)=>{
    //sayilar bir dizi olduğu için otomatik olarak map işlemini gerçekleştirebiliriz.
    return sayilar.map((item)=>{
        return item * item;
    });
};
//rest parametresi sayesinde kullanıcı buraya istediği kadar parametre verebiliyor.
KaresiniAl2(2,4,5,6,7,4);