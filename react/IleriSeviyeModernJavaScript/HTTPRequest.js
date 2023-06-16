//bu konu anlatımı için index2.html sayfasını kullanacağız.

//HTTPRequest oluşturmadaki amaç harici bir internet sitesine veri göndermek ya da bu internet sitesindeki verileri almaktır. Bunu API yordamıyla yaparız. jsonplaceholder internet sitesinden sahte verilerle çalışacağız.

//HTTPRequest oluşturmak. XMLHttpRequest() sınıfıyla bunu yapabiliriz.
const request = new XMLHttpRequest();
console.log(request);
//verilere ulaşmak için oluşturduğumz requesti open yapmalıyız. Bu open işlemi içerisinde de hangi metotu kullanacağımız ve hangi internet sitesine erişmeye çalışacağımız. Open yaptıktan sonra da send ile requestimizi dolduruyorum.
//ilk parametrede verilere erişmek istediğim için GET işlemi yapacağımız söylüyorum. İkinci parametre ise bizden adresi istiyor. 
//open ile bu internet sitesine bir bağlantı açıyorum.
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//ardından send ile bu verilere erişimiş olacağız
//send ediğim zaman bu requesti gönderiyorum ve cevabı almış oluyorum.
request.send();
//sonuç olarak readyState özelliğinin verilere göre dolduğunu ve status un 200 olması önemlidir isteğin başarılı olduğunu anlamak için. Eğer adresi yanlış yazarsak 404 hatası gelir.

//bu meydana gelebilecek hataları ReadyStateChange eventiyle readystate propertysinin değiştiği eventlerde yaklayabiliriz veya hata yoksa tüm bu apinin bize vereceği verilere erişebiliriz.
//aşağıdaki yapıyla bu apideki verilere erişim sağlayabiliyoruz.
//bu her readystate değiştiğinde çalışacaktır.
//readyState özelliği 4 ve statusu 200 ise bir hata yok verilere erişebiliriz demektir. Veriler requestin responseText inde bulunur
//addEventListener içerisinde readyState ve status özellikleri kontrol edilir.
request.addEventListener("readystatechange",()=>{
    console.log(request,request.readyState);
    if(request.readyState == 4){
        if(request.status == 200){
            console.log(request.responseText);
        }
    }
});