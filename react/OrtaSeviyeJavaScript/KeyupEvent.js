//bu konunun anlatımı için index13.html sayfasını kullandık.

//bir desen tanımlayalım
const kullaniciDesen = /^[a-z]{5,7}$/;

//forma ulaşalım
const form = document.querySelector(".signup");
//bu form içinde kullanıcının bilgi gireceği bir input vardı bu inputta klavyeyle hangi tuşa basılırsa basılsın tetiklenebilecek bir özelliğini oluşturabiliriz bu da keyupeventi oluyor.
//input bu form içinde olduğu için direkt böyle inputa ulaşarak ona bir keyyup event tanımlayabiliriz
form.kullaniciAd.addEventListener("keyup",(e)=>{
    //e parametresini konsola yazarak inputa girilen kalvyede basılan tuşun değerin özelliklerine ulaşabiliriz. ASCII karşılığı gibi vs.
    console.log(e);
    //e.target.value ile direkt girilen harflere erişebiliyoruz. Direkt inputtaki tüm ifadeyi bize verir
    console.log(e.target.value);
    //burda da farklı olarak sadece basılan tuşun değerini bize verir. hangi tuşa basıldığını kontrol etmek istesem bunu kullanabilirdim.
    console.log(e.key);
    //target ile ise inputu direkt etiketleri ile birlikte komple yakalıyoruz
    console.log(e.target);

    //inputun kendi özelliği olan çevresinde oluşan çerçeveyi silelim bu sayede yaptığımız işi daha net görelim. Outline styleini silicez yani.
    form.kullaniciAd.style.outline = "none";
    //desenemize göre inputun değerini test edelim
    if(kullaniciDesen.test(e.target.value)){
        //işlem doğruysa attribute değiştirip class vericem yeşil olsun
        form.kullaniciAd.setAttribute("class", "basarili");
    }
    else{
        form.kullaniciAd.setAttribute("class", "hatali");
    }
});
