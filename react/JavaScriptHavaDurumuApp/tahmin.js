//hava durumu apisine erişim işlerini burda yapalım.

//api keyim bir degiskende dursun siteden aldigim.
const key = "nPKBtVTyQxu7sl4FhhYcT5qM9KGvkWGb";

//apiden yararlanarak sehir getiren bir fonksiyon yazalım
//bu fonksiyon bir konum parametresi alacak.
const SehirGetir = async(konum) =>  {
    //apiye atacagim url istegini bir degiskende sakla.
    const temelUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    //sorgu cümlesi kurmam lazim, temel url ile sorgu cümlem birlesince istegim gitmis olacak.
    const sorgu = `?apikey=${key}&q=${konum}`;
    //artık birleştirme yaptığımda isteğim gönderilmiş olur. Fect metoduyla apiye bu isteği atalım ve bir response alalım.
    const response = await fetch(temelUrl+sorgu);
    //gelen responseu jsona çevirelim
    const veri = await response.json();
    //burada geriye bu 7 nesneli dizinin ilk verisini alalım sadece.
    return veri[0];
};

//apiye istek atıp sehir getiren fonksiyonu kullan
//Promise şeklinde veriler geldi bunun sebebi async bir fonksiyon ürettim ama fonksiyonun sade halini çağırdım. Bunun verisine ya da çalışmasını gösterebilmek için then oluşturmalıyız. Artık 7 adet nesne olan array geldi. Array türünde verilere ulaşırdık normalde ama yukarıdaki metotta bu diziden sadece ilk başta bulunan veriyi döndürdüğümüz için sadece o nesneye object türünde ulaşırız.
//catch fonksiyonu ile de harhangi bir hata olursa yakalayalım.
//async kullanınca bekeleme sonucunda 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.
SehirGetir("adana").then(sehirVeri => {
    //apiden hava durumu getiren fonksiyonumuz parametre olarak şehrin Key bilgisine ihtiyaç duyduğu için o bilgiyi bu esnada temin edebiliriz o yüzden o hava durumu getiren fonksiyonu burda çağırabiliriz. Then diyerekte o şehrin hava verisine ulaşabiliriz.
    return HavaDurumuGetir(sehirVeri.Key);
}).then((havaVerisi) => {
    console.log(havaVerisi);
}).catch(error => {
    console.log(error);
});


//şimdi apiden yararlanarak hava durumunu getiren bir fonksiyon yazalım
//bu fonksiyon parametre olarak ilgili şehrin idsini alacak o idye göre havadurumunu getirecek.
const HavaDurumuGetir = async(id) => {
    //temelurl oluştur
    const temelUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    //sorgu olustur
    const sorgu = `${id}?apikey=${key}`;
    //temelurl ve soruguyu birlestirip fetch et
    const response = await fetch(temelUrl+sorgu);
    const veri = await response.json();
    return veri[0];
};



