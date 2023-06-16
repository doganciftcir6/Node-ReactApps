//localstorage tarayıcı içerisinde anlık ve erişebilir bir şekilde verileri saklama yöntemidir. Chome incele ve Application menüsünden LocalStorage a erişebiliriz. Local bir veri saklama yöntemidir. Localhost adresimiz burada yer alıyor. Ben bir internet sitesi yaparken local olarak saklamak istediğim bir şeyi bu localstorageta saklayabilirim ve tekrardan ihtiyacım olduğunda localstoragea erişebilirim.
//tarayıcı kapansa bile localstorage temizlenmediği sürece bu değerler sabit kalır.

//localstoragea veri ekleme işlemi setItem() metotunu kullanırız. Bu veri key ve valuedan oluşur. Yani localstorage içerisinde bir nesne oluşturduğumu içerisinde özellikler ve değerleri tanımalmış olduğumu düşünebiliriz.
localStorage.setItem("isim", "ali");
localStorage.setItem("yas", 30);

//bu localstoragetaki verilere getItem() metotuyla erişebiliyoruz. Bu metot paremetresine localstoragetaki verinin keyini yazmamız gerekiyor.
let isim = localStorage.getItem("isim");
console.log(isim);
let yas = localStorage.getItem("yas");
console.log(yas);

//veriyi çektim şimdi localstorageta bulunan bu veriyi değiştirmek istiyorum. setItem() metotu veri ekleme yapabildiği gibi değiştirme işlemide yapabiliyor.Tekrar aynı keyi yazıp valuesini değiştrebilirim parametrelerde.
localStorage.setItem("isim","osman");
//asagıdaki sekildede güncelleme yapabiliyoruz.
localStorage.yas = 40;