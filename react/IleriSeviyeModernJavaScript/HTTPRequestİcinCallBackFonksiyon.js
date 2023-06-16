//bu konunun anlatımı için index3.html sayfası kullanışlmıştır.
//dışarıdan garici bir web sitesine get işlemini bir fonksiyon içerisinde gerçekleştiricez. Bu fonksiyonun içinde bir callback fonksyinou tanınmlayacaz. Daha sonra bu oluşturduğumuz fonksiyona erişirken bir hata oluşup oluşmadığını eğer hata oluşmadıysa da veriye erişicez.
//fonksiyonu nparametresindeki callback aslında bir fonksiyon olacak.
const TodoOlustur = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            //callback içine ilk veriyi yazalım ikinci olarak ise hatayı yazalım. Burada işlem başarılı olacağı için sadece veri olur hata yok o yüzden undefined koyalım
            callback(request.responseText, undefined);
        }
        else if(request.readyState == 4){
            //burada ise hata var veri yok o yüzden undefined koyalım ikinci olarakta vereceğimiz hatayı yazalım
            callback(undefined, "bir hata olustu");
        }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.send();
};

//fonksyionu oluşturduk şimdi çağırıp kullanalım
//ana  fonksiyonumda callback parametresi vardı onu arrow fonksiyon ile oluşturalım ve arrow fonksiyonun parametrelerine veri ve hata verelim. 
//arrow fonksiyonun tamamı bizim todoolustur(callback) burdaki callback aslında.
TodoOlustur((veri, hata)=>{
    if(hata){
        console.log(hata);
    }
    else{
        console.log(veri);
    }
});