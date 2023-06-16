//promise, jsonplaceholdera bir istek gönderiyoruz ve bu isteğimiz karşısında bize cevap gönderiliyor. Biz isteği gönderdiğimizde öncelikli olarak bize cevap gelmeyecektir çünkü bizim beklediğimiz şey o harici internet sitesinde veya dosyada bu istediğimiz cevabın hazırlanması.
//Biz isteği gönderiyoruz istek harici internet sitesine gönderildiğinde bize sana söz veriyorum isteğini yerine getiricem diye bir cevap döndürüyor. Ardından da cevabı gönderiyor. Yani bizim veriyi beklerken bir bekleme süremiz oluyor ve bu söz işte promise olarak karşımıza çıkıyor.
//Harici bir internet sitesinden veri alırken beklememizde oluşacak söze promise diyoruz. Bu beklemeyi anlatabilmek için de promisedan yaralanıyoruz. Yani biz jasonplaceholder web sitesinden veriler erişirken promise yöntemiyle eğer erişseydik bize sana söz veriyorum cevabını iletecem şeklinde önce bize bir mesaj verecekti ardından da cevabı eğer doğruysa bize istediğimiz verileri gönderecekti yanlış ise de hata mesajı gönderecekti. İşte bu doğru ve yanlışı da promise içerisinde resove ve reject işlemleri parametrelerinde yakalayabiliyoruz.

  //then kelimesi bir Promise nesnesinin sonucunu yakalamak ve onunla çalışmak için kullanılan bir yöntemdir. Bir Promise, asenkron bir işlemin sonucunu temsil eden bir JavaScript nesnesidir.
    //JavaScript'te then, Promise tabanlı asenkron işlemlerde kullanılan bir yöntemdir. Bir Promise nesnesinin sonucunu yakalamak ve işlemek için kullanılır.
    //Bu tür asenkron işlemlerin sonucunu almak için then yöntemi kullanılır. then yöntemi, Promise nesnesinin başarı durumunda çalışacak olan bir işlevi kabul eder. Bu şekilde, asenkron işlemin sonucunu alabilir ve onunla ilgili işlemleri yapabilirsiniz. Örneğin, API'den alınan verileri işleyebilir, sayfaya gösterebilir veya başka bir işlemde kullanabilirsiniz.
// Direkt verilerin gelmesi durumunda, işlem süresince sayfa bloke edileceği ve kullanıcı etkileşimi sağlanamayacağı için asenkron işlemler tercih edilir. then yöntemi sayesinde, işlem tamamlandığında sonucu elde edebilir ve kullanıcıya kesintisiz bir deneyim sunabilirsiniz.
// Kısacası, then yöntemi asenkron işlemlerin sonucunu yakalamak ve işlemek için kullanılır ve böylece kullanıcı deneyimini olumsuz etkilemeden verileri alabilir ve işleyebilirsiniz.
//async kullanınca 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.

const VerileriGetir = () => {
    //new Promise diyerek promisi tanımlayabilirim. Ve Promisemi oluştururken eğer doğru bir şekilde oluştaracaksam parametre olarak bir callback fonksiyon oluşturuyorum. Callback fonksiyonun parametresindeki resolve ile doğru verilerin gönderileceğini sağlamlaştırıyoruz.
    //reejct ise hatalı bir işlem olduğunda tetiklenecek.
    return new Promise((resolve, reject) => {
        //resolve bir fonksiyon aslında ve içerisine işlemimiz doğru olduğu zaman döndürülecek verileri yazmamız gerekiyor.
        resolve("dogru veriler");
        reject("hatali veri");
    });
};

//then burada eğer promise içerisinde resolve tetiklendiyse çalışacak olan bir metottur. Yani doğru verilere erişmek için kullanacağım metot.
//hata olduğunu yakalamak için ise thenden sonra catch metotunu kullanarak hatayı yakalayabiliriz.
VerileriGetir().then(veri => {
    //bana dönen verileri veri parametresiyle alacağım.
    console.log(veri);
}).catch((err) => {
    console.log(err);
});