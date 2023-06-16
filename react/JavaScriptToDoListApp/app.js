//yapılacak ekleme işlemi yapalım
const form = document.querySelector(".add-form");
const liste = document.querySelector(".todos");
const aramaInput = document.querySelector(".search input");

form.addEventListener("submit",(e)=>{
    //sayfanın yenilenmesini engelle varsayılan özellikleri sıfırlayarak
    e.preventDefault();

    //kullanıcının bu form içindeki inputa girdiği değere ulaşalım
    //anacak kullanıcı input boşluklar girip öyle gönderme yapabiliyor bunun için trim metoduyla sağda ve solda oluşan boşlukları yok ederiz.
    //kullanıcının inputa girdiği değeri büyük yazsa bile toLowerCase metotu ile küçüğe çevirelim ki sonra arama işlemi yapıldığında küçük harflere göre arama yapabilelim birbirine uysunlar yani.
    const yapilacak = form.add.value.trim().toLowerCase();
    //ancak kullanıcı hala sadece boşluk yazarak ekleme yapabiliyor bu durumdan da kurtulalım
    if(yapilacak.length != 0){
        //oluşturduğumuz fonksiyonu çağırarak kullanıcın girdiği bu değeri listeye ekleyelim. parametre olarak göndererek
        TemplateOlustur(yapilacak);
        //ekleme işlemi gerçekleştikten sonra inputun içindeki değeri yok edelim. reset() fonksiyonu ile formu resetleyebiliyoruz.
        form.reset();
    }
});

//listenin ul etiketidir bunun içerisine li etiketiyle birlikte yapılacak işi eklememiz lazım bunu ayrı bir fonksiyonda yapabiliriz
function TemplateOlustur(yapilacak){
    let html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${yapilacak}</span>
        <i class="fa fa-trash-alt delete"></i>
    </li>
    `;

    //oluşan bu templatei listeye ekleyelim
    liste.innerHTML += html;
}




//çöp kutusu ikonuna tıkladığımızda yapılacak işin silinmesi işlemini yapalım
liste.addEventListener("click",(e) => {
    //e.target denildiğinde hangi li içindeki hangi etikete tıklandığını etiket olarak direkt yakalayabiliyoruz.
    //elemanın classları içinde delete varsa containst metotu true dönderir yoksa false döndürür bu yöntemle çöp kutusuna tıklayıp tıklamadığımı bulabilirim.
    if(e.target.classList.contains("delete")){
        //silme işi gerçekleştrilir çöp kutusuna tıklanılmış demekir.
        //çöp kutusuna tıklanıldığında i etiketine ulaşılır ama ben li etiketini komple silmek istiyorum o yüzden parentElement diyerek onun üst etiketine ulaşacağım
        e.target.parentElement.remove();
    }
});



//arama inputuna girilen değere göre filtreleme işlemini yapalım
aramaInput.addEventListener("keyup",(e) => {
    //aranacak olan ifadeyi bulmam lazım yani kullanıcının inputa girdiği değeri input.value özelliğiyle
    //trim() metotuyla kullanıcının inputa girdiği değerin başındaki ve sonundaki boşluklardan kurtulalım.
    //inputa girilen değerde büyükte yazsak küçükte yazsak küçültme işlemide yapmalıyız toLowerCase() metotu ile.
    const ifade = aramaInput.value.trim().toLowerCase();
    //filtre yapacak olan yazdığımız metotu burda çağıralım ve parametre olarak kullanıcının inputa girdiği değeri gönderelim.
    FiltreOlustur(ifade);
});
//arama işlemi yapabilmek için bir fonksiyona ihtiyacım var.
const FiltreOlustur = (ifade) => {
    //listemin elemanları içerisinde bir arama yapmak istiyorum. Bu elemanlara children diyerek ulaşabilirim. Ancak bu veriler bana HTMLCollection olarak geliyor bunların içerisinde bir filter metotu yazabilmem için bunları array yapmam lazım. Array.from() metotuyla bunu yapabilirim. Listenin çocukları içerisinde bir filtre uyguluyabilirim artık
    Array.from(liste.children).filter((yapilacak) => {
        //burada filter metotumla bütün li elemanlarında tek tek gezerim ve yapilacak parametresine bunlar tek tek düşerler. yapilacak.textContent diyerek li etiketlerinin içeriğine ulaşabilirim.
        //includes fonksiyonu ile ifadeyi içerip içermediğini kontrol edebilirim. True ya da false gelir.
        //bana falselar yani sağlamayanlar lazım çünlü onları yok edeceğim. ! yapacağım bunun için. Bunların içinde bir foreach ile tek tek gezeceğim ve class özelliklerini değiştireceğim. Bu sayede onları görünmez yapacağım.
        return !yapilacak.textContent.toLowerCase().includes(ifade);
    }).forEach((item)=>{
        //burada artık aramaya göre uyuşmayanlar var
        //filtered diye display:none styleına sahip bir class oluşturdum bu classı bu aramaya uymayanların classlistesine ekleyerek onları görünmez yaparım.
        item.classList.add("filtered");
    });


    //birde bu aramayı sağlayanları getirteceğim ve bu sefer sağlayan elemanların class listesinden filtered'ı sileceğim ki kullanıcı inputa girdiği değeri sildiğinde liste eski haline geri dönebilsin diye. Bunu yapmazsak kullanıcı değer girip silerse eski veriler geri gelmze liste boş kalır.
    Array.from(liste.children).filter((yapilacak) => {
        return yapilacak.textContent.toLowerCase().includes(ifade);
    }).forEach((item)=>{
        item.classList.remove("filtered");
    });
};