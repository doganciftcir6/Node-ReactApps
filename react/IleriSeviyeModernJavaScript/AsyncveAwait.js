//bu konu anlatımı için veriler.json dosyasını kullandık.

//Async ve await ile bir asenktron kodlama gerçekleştirebiliyoruz. Fatch metotunu asekron olarak bir fonksiyon içerisinde kullanmamız gerekebilir. Fetch fonksiyonu da bir promise yani belli bir işlemlerden sonra bize döndürür veriyi. Bu bekleme süresini sağlayabilmek için asekron kodlama yapmamız gerekiyor.

 //then kelimesi bir Promise nesnesinin sonucunu yakalamak ve onunla çalışmak için kullanılan bir yöntemdir. Bir Promise, asenkron bir işlemin sonucunu temsil eden bir JavaScript nesnesidir.
    //JavaScript'te then, Promise tabanlı asenkron işlemlerde kullanılan bir yöntemdir. Bir Promise nesnesinin sonucunu yakalamak ve işlemek için kullanılır.
    //Bu tür asenkron işlemlerin sonucunu almak için then yöntemi kullanılır. then yöntemi, Promise nesnesinin başarı durumunda çalışacak olan bir işlevi kabul eder. Bu şekilde, asenkron işlemin sonucunu alabilir ve onunla ilgili işlemleri yapabilirsiniz. Örneğin, API'den alınan verileri işleyebilir, sayfaya gösterebilir veya başka bir işlemde kullanabilirsiniz.
// Direkt verilerin gelmesi durumunda, işlem süresince sayfa bloke edileceği ve kullanıcı etkileşimi sağlanamayacağı için asenkron işlemler tercih edilir. then yöntemi sayesinde, işlem tamamlandığında sonucu elde edebilir ve kullanıcıya kesintisiz bir deneyim sunabilirsiniz.
// Kısacası, then yöntemi asenkron işlemlerin sonucunu yakalamak ve işlemek için kullanılır ve böylece kullanıcı deneyimini olumsuz etkilemeden verileri alabilir ve işleyebilirsiniz.
//async kullanınca 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.


//async anahtar sözcüğü ile metotun asektron olduğunu işaretliyoruz.
const VerileriGetir = async () => {
    //await anahter kelimesi ile önce fetch fonksiyonun yapacağı işi bekliyorum.
    //Burda await kullanıp önce fetchin olmasını beklemezsek res.json(); hata verir çünkü daha veriler dolmamış hangi veriyi json yapacak onu bilemez.
    const res = await fetch("veriler.json");
    const veri = await res.json();
    return veri;
};

VerileriGetir().then((veri) => {
    console.log(veri);
});