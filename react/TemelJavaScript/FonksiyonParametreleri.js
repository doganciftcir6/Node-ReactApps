//fonksiyon değişkenlere bağlı kod yazma imkanı oluşturuyor.
//fonksiyon oluştrulurken fonksiyon içindeki kodlarda kullanmak üzere dışarıdan bir değişken gönderme işlemine parametre diyoruz.
//parantezin içine parametreleri yerleştiriyoruz.

const ParametreliFonk = function(sayi){
    console.log(`sayi: ${sayi}`);
};
//şimdi fonksiyonu çağırıp parametresini göndermek gerekiyor.
ParametreliFonk(5);


//birden çok parametre verebiliriz.
const IkiParametreliFonk = function(sayi,yazi){
    console.log(`sayi: ${sayi} ve yazi: ${yazi}`);
};
IkiParametreliFonk(15,"ali");


//eğer fonksiyon çağırıldığında parametreler girilmezse undefind olmaması için parametreleri fonksiyon parantezinde oluşturma sırasında onlara default değerler atayabiliriz. Bu sayede kullanıcı fonksiyonu çağırıp parametreli girmezse otomatik olarak default değerler kullanılır. Ama parametre gönderirsek dafult değerler çalıştırılmaz gönderilen parametreler çalıştırılır. Eğer bir parametre gönderilip diğer parametre gönderilmezse gönderilen parametre çalışır gönderilmeyen ikinci parametre için default değer çalıştırılır.
const DefaultFonk = function(sayi=100,yazi="ali"){
    console.log(`sayi: ${sayi} ve yazi: ${yazi}`);
};
DefaultFonk();