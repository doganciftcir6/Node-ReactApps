//bu konunun anlatımı için index11.html sayfasını kullandık.

//submiteventi form etiketlerinin eventidir. form etiketi tetiklendiğinde yani entera basıldığında ya da submit butonuna tıklandığında çalışan bir eventtir. ve form içerisindeki bütün etiketlere içerisindeki değerleri yakalamamızı sağlar.

//form içinde kaydet butonuna tıkladığımızda sayfanın yenilendiğini görürüz bu olay bizim verilerimizi kaybetmemize yol açar. Bu yüzden sayfanın yenilenmesini engellemeliyiz.

const form = document.querySelector(".signup");
//name özelliği ile elemana ulaşalım bu sefer
const inputText = document.querySelector('[name="kullaniciAd"]');

form.addEventListener("submit",(e) => {
    //sayfanın yenilenmesini engellemek için preventDefault() metotunu çalıştırıyorum. Bununla bütün varsayılan özellikleri kaldırmış olduk.
    e.preventDefault();
    console.log(e);
    //formdaki inout içerisindeki veriye ulaşmak istiyorum
    // console.log(inputText.value);
    //veya böyle de ulaşabiliriz direkt formdan ilerleyerek. Sonuçta input bu form içinde.
    console.log(form.kullaniciAd.value);
});
