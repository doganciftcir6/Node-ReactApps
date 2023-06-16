//modallar ve Collapsible
//modalların çalıştırabilmesi için dom content loaded olayını yakalamam lazım. Domların içeriklerinin yüklendiği anı yakalayabilmem lazım;
document.addEventListener("DOMContentLoaded",function(){
    //bütün modalları çekmem lazım
    var modals = document.querySelectorAll(".modal");
    //M matealiazeı temsil ediyor. Materializeın modallarına bu benim yukarıda çektiğim modalların bir modal olduğunu bildirerek çalışmalarını sağlarım.
    M.Modal.init(modals);

    //collapsible çalışması için materialize e haber ver elemanları.
    var makaleler = document.querySelectorAll(".collapsible");
    M.Collapsible.init(makaleler);
});



//burda index sayfasında bulunan makale listesindeki li etiketlerini bir fonksiyonla oluşturup auth kısmında kullanıcı login olmuşsa uygulamaya aktarıcam
//ul etiketine ulaşalım
const makaleler = document.querySelector(".guides");
const MakaleYukle = (data, loginCheck) => {
   if(loginCheck == true){
    console.log("basarilideneme");
     //veri varsa yani gişiş işlemi yapılmış ve buraya veriler geldiyse.
     //burdaki data parametresine dbde bulunan döküman verilerini gönderdim.
     let html = ``;
     //datam birden fazla veri olduğu için foreach ile verilerde gezelim.
     data.forEach(doc => {
         const makale = doc.data();
         //.data() fonksiyonuyla bu belgelerin direkt verisini çekelim. Object olarak.
         console.log(makale);
         //lileri oluşturalım
         const li = `
             <li>
                 <div class="collapsible-header grey lighten-4">${makale.baslik}</div>
                 <div class="collapsible-body white"><span>${makale.icerik}</span></div>
             </li>
         `;
         //bu oluşan her bir li yi yani 2 li yi sıra sıra html içine aktar.
         html += li;
     });
     //ul etkikeninin içine bu oluşan htmli aktar.
     makaleler.innerHTML = html;
   }else{
    console.log("denemebasarisiz");
     //giriş işlemi yapılmamış ve hiç veri gelmediyse ul etiketinin içine mesaj yazdıralım
     makaleler.innerHTML = "<h5 class='center-align'>Makaleleri goruntulemek icin giris yapmaniz gerekmektedir.</h5>";
   }
};




//giriş yapmış ve çıkış yapmış kullanıcı navbarda farklı linkler görmeli onu bir fonksiyonla ayarlayalım
const girisLinkleri = document.querySelectorAll(".logged-in");
const cikisLinkleri = document.querySelectorAll(".logged-out");
const uyelikDetaylari = document.querySelector(".account-details");
const KullaniciYukle = (kullanici) => {
    if(kullanici){
        //eğer kullanıcı varsa giriş yapıldıysa linkleri ona göre yerleştirecek
        //giris linkleri görünmeli
        //giris linklerinde gezerek stlye özelliğini display:block yaparak görünmelerini sağla
        //çıkış linklerinde gezerek style özellğini none yap ki görünmesinler
        girisLinkleri.forEach((item) => {
            item.style.display = "block";
        });
        cikisLinkleri.forEach((item) => {
            item.style.display = "none";
        });
         //uyelik detay işlemleri eğer kullanıcı giriş yapmışsa bu detay yüklenmesi lazım giriş yapmamışsa boş bırakabiliriz. Burası giriş yaptığı alan olduğu için bu alanı burda dolduralım.
         //dbye bir get işlemi gerçekleştirelim koleksiyon ve belge bilgisi çekicez burda. Belgenin idsini doc() parametresine girip o belgeyi getirticcem bu da belge idsi kullanicin idsiyle aynı yaptığım için.
         db.collection("kullanicilar").doc(kullanici.uid).get().then((doc) => {
            let html = `
            <div>Kullanici mail: <b>${kullanici.email}</b></div>
            <div>${doc.data().bio}</div>
             `;
             uyelikDetaylari.innerHTML = html;
         });
    }
    else{
        //giriş yapılmadıysa kullanıcı yoksa linkleri ona göre yerleştir
        //yukarıdaki işlemin tam tersini yap
        girisLinkleri.forEach((item) => {
            item.style.display = "none";
        });
        cikisLinkleri.forEach((item) => {
            item.style.display = "block";
        });
        //kullanıcı detayları kısmı giriş olmadığı için boş yapalım
        uyelikDetaylari.innerHTML = "";
    }
}



