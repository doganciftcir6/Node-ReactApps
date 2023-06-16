//bu konu anlatımı için veriler.json dosyasını kullandık

  //then kelimesi bir Promise nesnesinin sonucunu yakalamak ve onunla çalışmak için kullanılan bir yöntemdir. Bir Promise, asenkron bir işlemin sonucunu temsil eden bir JavaScript nesnesidir.
    //JavaScript'te then, Promise tabanlı asenkron işlemlerde kullanılan bir yöntemdir. Bir Promise nesnesinin sonucunu yakalamak ve işlemek için kullanılır.
//Bu tür asenkron işlemlerin sonucunu almak için then yöntemi kullanılır. then yöntemi, Promise nesnesinin başarı durumunda çalışacak olan bir işlevi kabul eder. Bu şekilde, asenkron işlemin sonucunu alabilir ve onunla ilgili işlemleri yapabilirsiniz. Örneğin, API'den alınan verileri işleyebilir, sayfaya gösterebilir veya başka bir işlemde kullanabilirsiniz.
// Direkt verilerin gelmesi durumunda, işlem süresince sayfa bloke edileceği ve kullanıcı etkileşimi sağlanamayacağı için asenkron işlemler tercih edilir. then yöntemi sayesinde, işlem tamamlandığında sonucu elde edebilir ve kullanıcıya kesintisiz bir deneyim sunabilirsiniz.
// Kısacası, then yöntemi asenkron işlemlerin sonucunu yakalamak ve işlemek için kullanılır ve böylece kullanıcı deneyimini olumsuz etkilemeden verileri alabilir ve işleyebilirsiniz.
//async kullanınca 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.

//VerileriGetir fonksiyonun parametresine verileri nerden getireceksin harici internet sitesi veya dosya. Kaynak diyelim.
const VerileriGetir = (kaynak) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200){
                //hata yok
                let veriler = JSON.parse(request.responseText);
                resolve(veriler);
            }
            else if(request.readyState == 4){
                //hata var
                reject("bir hata olustu");
            }
        });
        request.open("GET", kaynak);
        request.send();
    });
};


//verilerimin kaynagını artık parametre olarak gönderiyorum yukarıdaki fonksiyona.
VerileriGetir("veriler.json").then(veri => {
    //bana dönen verileri veri parametresiyle alacağım.
    console.log(veri);
}).catch((err) => {
    console.log(err);
});