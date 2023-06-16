//bu konunun anlatımı için index12.html sayfasını kullandık.

//regular expression kullanarak input değerinin o oluşturduğumuz desene uyup uymadığını kontrol edicez bu işleme ise validation deniyor.
const form = document.querySelector(".signup");
const geriDonus = document.querySelector(".geridonus");

//submit olma olayını kontrol edicez
form.addEventListener("submit",(e)=>{
    //form submit olduğunda sayfanın yeniden yüklenmesini engelleyelim
    e.preventDefault();
    //inputu yakalayalım kullanıcının giriş yapacağı değere ulaşalım
    const kullaniciAdi = document.querySelector("#kullaniciAd").value;
    console.log(kullaniciAdi);
    //benim bir de desenim olsun
    const kullaniciDeseni = /^[a-zA-Z]{5,10}$/;
    //Bu deseni artık test ederek bir kısıtlama ve kontrol yapabiliriz. Kullanıcının girdiği değeri bu desene uyup uymadığını kontrol edelim yani.
    if(kullaniciDeseni.test(kullaniciAdi)){
        //sayfada bulunan p etiketine bir yazı yazdıralım
        geriDonus.textContent = "Dogru"
    }
    else{
        geriDonus.textContent = "Yanlis"
    }
});