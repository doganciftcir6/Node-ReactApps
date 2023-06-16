const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    //sayfanın yenilenmesini engelle.
    e.preventDefault();
    //inputun yani kullanıcının gireceği değerin value bilgisini yakala
    //trim fonksiyonu ile kullanıcının girdiği bilginin başındaki ve sonundaki boşluklardan kurtul
    const sehir = form.sehir.value.trim();
    //oluştuduğumuz fonksiyonu çağırıp kullanalım bu sayede kullanıcının girdiği değeri işin arka kısmına apiyle ilgili işlemlere aktarmış olucaz. Metot async olduğu için then ile veriye ulaşabiliriz.
    //then kelimesi bir Promise nesnesinin sonucunu yakalamak ve onunla çalışmak için kullanılan bir yöntemdir. Bir Promise, asenkron bir işlemin sonucunu temsil eden bir JavaScript nesnesidir.
    //JavaScript'te then, Promise tabanlı asenkron işlemlerde kullanılan bir yöntemdir. Bir Promise nesnesinin sonucunu yakalamak ve işlemek için kullanılır.
    //async kullanınca 2 olay oluyor gibi düşün ya başarılı ya başarısız başarılı işlemin sonucunu then ile başarısızı ile catch ile ele alabiliyoruz.
    SehirGuncelle(sehir).then((sehirveHavaDurumuVerisi) => {
        //htmli güncelleme işlemi bu esnada olacak. Yani kullanıcı inputa şehir girip submit yapınca html bu verilere göre güncelleme yapacak.
        guncelleUI(sehirveHavaDurumuVerisi);
    }).catch((error) => {
        console.log(error);
    });
    //kullanıcı değeri girip submit yaptıktan sonra formu resetle ki inputun içi temizlensin
    form.reset();

    //son aranan şehri localstroge içerisinde saklayacağız böyleyece aradığımız son şehrin hava durumu bilgileri karşımızda olacak.
    localStorage.setItem("sehir", sehir);
});


//kullanıccının inputa yazdığı bilgiyle apiden bilgileri çekebilmek için bir fonksiyon yazalım.
const SehirGuncelle = async (sehir) => {
    //önce sehir bilgisini alıcaz sonra o şehrin Key bilgisiyle ilgilenicez. tahmin.js kısmındaki fonksiyondan faydalanıcaz.
    const sehirDetay = await SehirGetir(sehir);
    const havaDurumu = await HavaDurumuGetir(sehirDetay.Key);
    //bu 2 bilgiyede ihtiyacım var ikisinide döndürücem geriye.
    //aşağıda oluşturduğum sabiti bir nesne ile geri döndürüyorum nesnenin içerisindeki sehirDetay keyine sehirDetay sabitini value olarak dönderiyorum yani işin sonunda böyle bir nesne döndürebilirim.
    return {
        sehirDetay:sehirDetay,
        havaDurumu:havaDurumu
        //js ye özel bir durum eğer key ve value aynıysa direkt aşağıdaki kullanım yapılabilir görürsen şaşırma
        // sehirDetay,
        // havaDurumu
    }
};


//USER INTERFACE ISLEMLERI
const detay = document.querySelector(".detay");
const card = document.querySelector(".card");
const zamanResmi = document.querySelector("img.zaman");
const icon = document.querySelector(".icon img");

const guncelleUI = (sonVeri) => {
    // const sehirDetay = sonVeri.sehirDetay;
    // const havaDurumu = sonVeri.havaDurumu;
    //yukarıdaki kodu aşağıdaki tek satırlık kullanımlada kısa bir şekilde yapabilirim.
    const {sehirDetay,havaDurumu} = sonVeri;

    //detay divini güncelleyelim apiden gelen bilgilere göre
    detay.innerHTML = `
    <div class="text-muted text-uppercase text-center detay">
                <h5 class="my-3">${sehirDetay.LocalizedName}</h5>
                <div class="my-3">${havaDurumu.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${havaDurumu.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
    </div>
    `;

    //ikonu api bilgisine göre güncelle
    const iconSrc = `img/icons/${havaDurumu.WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);
    //resim alanına api bilgisine göre gündüz veya gece yap
    // let zamanSrc = null;
    // if(havaDurumu.IsDayTime){
    //     //o zaman hava gündüzdür
    //     zamanSrc = "img/day.svg";
    // }
    // else{
    //     zamanSrc = "img/night.svg";
    // }
    //veya kısa şekilde yapabiliriz if elsei.
    let zamanSrc = havaDurumu.IsDayTime?"img/day.svg":"img/night.svg";
    zamanResmi.setAttribute("src",zamanSrc);

    //kullanıcı şehir ismi girdiğinde submit yaptığında yani cardı sonra gösterelim başta gözükmesin bu card
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }
};

//bu sayede sayfa yenilense bile sehir bilgisi local storagedan çekileceği için son aranan şehir bilgisi kalcaktır.
if(localStorage.getItem("sehir")){
    SehirGuncelle(localStorage.getItem("sehir")).then((sehirveHavaDurumuVerisi) => {
        guncelleUI(sehirveHavaDurumuVerisi);
    }).catch((error) => {
        console.log(error);
    });
}


