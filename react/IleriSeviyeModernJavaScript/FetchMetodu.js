//bu konu anlatımı için veriler.json dosyası kullanılmıştır.

    //then kelimesi bir Promise nesnesinin sonucunu yakalamak ve onunla çalışmak için kullanılan bir yöntemdir. Bir Promise, asenkron bir işlemin sonucunu temsil eden bir JavaScript nesnesidir.
    //JavaScript'te then, Promise tabanlı asenkron işlemlerde kullanılan bir yöntemdir. Bir Promise nesnesinin sonucunu yakalamak ve işlemek için kullanılır.
    //Bu tür asenkron işlemlerin sonucunu almak için then yöntemi kullanılır. then yöntemi, Promise nesnesinin başarı durumunda çalışacak olan bir işlevi kabul eder. Bu şekilde, asenkron işlemin sonucunu alabilir ve onunla ilgili işlemleri yapabilirsiniz. Örneğin, API'den alınan verileri işleyebilir, sayfaya gösterebilir veya başka bir işlemde kullanabilirsiniz.
    // Direkt verilerin gelmesi durumunda, işlem süresince sayfa bloke edileceği ve kullanıcı etkileşimi sağlanamayacağı için asenkron işlemler tercih edilir. then yöntemi sayesinde, işlem tamamlandığında sonucu elde edebilir ve kullanıcıya kesintisiz bir deneyim sunabilirsiniz.
    // Kısacası, then yöntemi asenkron işlemlerin sonucunu yakalamak ve işlemek için kullanılır ve böylece kullanıcı deneyimini olumsuz etkilemeden verileri alabilir ve işleyebilirsiniz.
    //async kullanınca 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.

//Httprequest ve Promise kullanmayı daha önceki derslerde öğrendik. Şimdi bu 2 yapıyı birleştiren daha kısa bir yol olan fetch metotunu kullanıcaz.
//Fetch metotu ile çok kolay bir şekilde harici dosyalara veya harici web sitesinin apisine erişim sağlayabiliriz.

//öncelikle harici dosyamıza erişelim.
//fetch metodu Promise<Response> türündedir dolayısıyla then ve catch metotlarına sahiptir.
//bunun içib fetch metodunun ilk parametresine dosya yolumu yazarım.
//herhangi bir hata olmadığı zaman çalışacak olan .then() fonksiyonuna res parametreli callback fonkiyon geçerek içerisinde yakaladığım değeri rest ile ifade edicem.
fetch("veriler.json").then((res) => {
    //res parametresiyle bize dönen response a erişmiş olduk.
    console.log(res);
    //bu bize dönen responseun yani res in jsonlanmış halini almak istiyorum. json(); metotunu kullanabilirim.
    return res.json();
    //tekrar then() ile bu verilere erişebiliriz. Verileri veri parametresiyle gösteriyorum.
    //burada ilk then ile bize dönen response a eriştik, ikinci then ile de res.json()'ı döndürmemizden kaynaklı olarak veriye eriştik
}).then((veri) => {
    console.log(veri);
    //burada catch metodunu kullnarakta herhangi bir hata olması halinde tetiklenecek olan metot olarak düşünebiliriz. Her bir hata err parametresi içerisinde olacaktır.
}).catch((err) => {
    console.log(err);
});


//bir de jsonplace holder kullanarak site apisine erişim sağlayalım.
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json))