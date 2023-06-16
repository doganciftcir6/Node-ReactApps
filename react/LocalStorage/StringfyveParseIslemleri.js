const veriler = [
    {ad:"Ali", yas:30},
    {ad:"Osman", yas:45},
    {ad:"Esra", yas:25},
];

//bu veriler dizisini localstroge a eklemek istiyorum
//bu şekilde işlem yaptığımızda verilerin object:object olarak atıldığını görürüz. İşte bu noktada json olarak stringfy işlemini gerçekleştirmemiz lazım. Localstrogea set etmeden önce bu nesne dizisini stringfy fonksiyonuna sokacaz ve sonra gönderecez.
localStorage.setItem("veriler", veriler);
let veriler1 = localStorage.getItem("veriler");
console.log(veriler1);

//verilerimizin object:object gibi kapalı bir şekilde açık ve düzgün bir şekilde gelmesi için localStoragea;
localStorage.setItem("veriler", JSON.stringify(veriler));
let veriler2 = localStorage.getItem("veriler");
//ancak bu strinfy metotu bu verileri string olarak yazdı bu verileri ilk halina yani nesne dizisi haline döndürmek için parse işlemi yapmak gerekiyor.
console.log(JSON.parse(veriler2));