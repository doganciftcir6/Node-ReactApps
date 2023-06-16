//burdada auth kodlarını yazabiliriz.

//auth durumunu izleme
//uygulamamızdaki üyelerin firebase e auth olup olmadığı durumları izlicez.
//onAuthStateChanged(); metotuyla kullanıcının login olup olmadığını izleyebiliriz.
//Login olmuş kullanıcının bilgileri bu metotun parametresine düşer. Eğer login olmuş kullanıcı yoksa buraya null düşer.
var girisYapildimi;
auth.onAuthStateChanged((k) => {
    console.log(k);
    if(k){
        //eğer k işlemi dolmuşsa giriş işlemi varsa 
        console.log("giris islemi basarili");
        //giriş işlemi yapıldığı zaman firestore db mizdeki verileri çekelim. Çıkış yapıldığında ya da giriş yapılmadığında bu içerik gözükmez bu sayede.
        //verileri getir
        //get() fonksiyonunu kullanırsak burda verileri getirme esnasında yeni oluşturulan makale yeni yüklendiği için veriyi sayfaya getirmiyor. Eğer burada onSnapShot(); fonksiyonunu kullanırsak makaleye add fonksiyonu ile eklediğimiz zaman firebase içinde olan bir hareketliliği yaklayacak uygulamamız ve bunun yeni eklendiği ve yeni eklendiği için tekrardan çalışması gerektiğini algılayacak. Bu sayede ekleme yaptığım kayıt anında sayfama gelecek. Realtime firestore işlemi oluyor. Artık then kullanmaya da gerek yok ayrıca.
        db.collection("makaleler").onSnapshot((snapshot) => {
            console.log(snapshot.docs);
            //dbmizdeki verileri oluşturduğumuz fonksiyonun parametresine atalım.
            girisYapildimi = true;
            MakaleYukle(snapshot.docs, girisYapildimi);
            //giriş ve çıkış linklerinin görünümü için fonksiyonumuzu çağıralım ve kullanıcı bilgisi giriş yapıldığı için parametresine verelim
            KullaniciYukle(k);
        });
    }
    else{
        //eğer login durumu yoksa yine fonksiyonu çalıştıralım bu sefer parametre olarak bu fonksiyon dizi aldığı için boş bir dizi koyalım.
        girisYapildimi = false;
        MakaleYukle([], girisYapildimi);
        //giriş ve çıkış linklerinin görünümü için fonksiyonumuzu çağıralım ve kullanıcı bilgisini boş gönderelim kullanıcı giriş yapmadığı için.
        KullaniciYukle();
        console.log("cikis islemi basarili2");
    }
});



//makale oluşturmak
//önce forma ulaşmam lazım
const makaleOlusturForm = document.querySelector("#create-form");
//bu formun submit olayına ihtiyacım var
makaleOlusturForm.addEventListener("submit", (e) => {
    //submit olduğunda sayfanın yenilenmesini engelle
    e.preventDefault();
    //makalelere koleksiyonuma kullanıcının form inputlarına girdiği verileri alarak makale eklemesi yapabilirim
    db.collection("makaleler").add({
        baslik: makaleOlusturForm["title"].value,
        icerik: makaleOlusturForm["content"].value
    }).then(() => {
        //then() fonksiyonu ile makale eklendikten sonra yapmak istediğimiz.
        //eklendikten sonra modalı kapatmak istiyorum. Ve form inputlarındaki verileri temizlemek istiyorum.
        const modal = document.querySelector("#modal-create");
        M.Modal.getInstance(modal).close();
        makaleOlusturForm.reset();
    }).catch(err => {
        //eğer ekleme işlemi sırasında hata olduysa hata durumunda ise hatayı yakalayalım
        console.log(err.message);
    });
});



//üyelik oluşturma işlemleri
//önce register formuna ulaş
const uyelikForm = document.querySelector("#signup-form");
//üyelik formunun submit olayı gerekli, submit tetiklendiğinde yeni bir üyelik açacağız
uyelikForm.addEventListener("submit",(e) => {
    //submit olduğunda sayfanın yenilenmesini engelle
    e.preventDefault();
    //firebase e yeni bir üyelik açıcaz bu üyelikte mail ve parola kullanıcaz form içerisindeki inputlardaki verileri yakalanmam lazım o yüzden
    const mail = uyelikForm["signup-email"].value;
    const parola = uyelikForm["signup-password"].value;

    //firebase e bu işlemi gönderelim createUserWithEmailAndPassword() fonksiyonun ilk parametresine mail bilgisini ikinci parametreye parola bilgisini vermeliyiz.
    //kullanıcı oluştuktan sonra bir şey yaptırmak istersem then fonksiyonunu kullanabilirim. Burda bu metot token bilgisini bize gönderir then ile. Then ile üyelik oluşturuluktan sonra yapılması gereken işleri yönetebilirim.
    auth.createUserWithEmailAndPassword(mail,parola).then((sonuc) =>{
        console.log(sonuc.user);
        //üyelik oluşturduktan sonra kullanicilar diye bir koleksiyon oluşturalım dbmizde. Bu eğer kullanicilar koleksiyonu yoksa yeni bir koleksiyon oluşturacak ama eğer varsa yeni belgeyi bu kullanicilar koleksiyonun içine atacak.
        //parametre olarak kullanıcının idsini yakalayalım ki bu userıd ile birlikte kullanıcılar koleksiyonumda belgem oluşsun. Belge içerisine bio alanı eklenecek ve bu alanda kullanıucının bio inputuna girdiği bilgiden gelecek. Yani bu ıd belgenin ıdsi olacak kullanıcının id si ile belgenin ıd si aynı olmuş oalcak belge içeriğinde de bio alanı olacak.
        return db.collection("kullanicilar").doc(sonuc.user.uid).set({
            bio:uyelikForm["signup-bio"].value,
        }).then(() => {
        //kayıt işlemi başarılı olduktan ve koleksiyona ekleme işlemi başarılı olduktan sonra modalı kapatmalıyız. Bunuda thenler ile sağlıyoruz.
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        //modal kapandı fakat uyelik oluştura tekrar basında bilgiler içerisinde dolu kaldı o verileride silelim.
        uyelikForm.reset();
        });
    });
});



//üyelik oluşturulunca kullanıcı otomatik olarak login olur.
//çıkış yapma işlemleri
//önce çıkış butonuna tıklanma olayını yakalamam lazım
const cikisButonu = document.querySelector("#logout");
cikisButonu.addEventListener("click",(e) => {
    //butona tıklanıldığında sayfanın yenilenmesini engelle.
    e.preventDefault();
    //çıkış işlemini signOut() metotuyla gerçekleştirir ve signout yaptıktan sonra then() ile yaptırmak istediğimizi yapabiliriz.
    auth.signOut().then(() => {
        console.log("cikis islemi basarili");
    });
});


//giriş işlemleri
//login formuna ulaşmam lazım öncellikle
const loginForm = document.querySelector("#login-form");
//form submit olduğunda giriş işlemi yapacağım submit eventini yakala
loginForm.addEventListener("submit",(e) => {
    //submit olduğunda sayfanın yenilenmesini engelle
    e.preventDefault();
    //kullanıcın form içinde inputlara girdiği mail ve password bilgisini yakalamam lazım.
    const mail = loginForm["login-email"].value;
    const parola = loginForm["login-password"].value;
    //artık login işlemi gerçekleştirebiliriz. signInWithEmailAndPassword() metotunun ilk parametresi email ikincisi password olacak şekilde doldurulunca giriş işlemini yapar.
    //then() ile işlemden sonrasını yakalıyorum
    auth.signInWithEmailAndPassword(mail,parola).then((sonuc) => {
        console.log(sonuc.user);
        //login işlemi olduktan sonra modali kapat.
        const modal = document.querySelector("#modal-login");
        M.Modal.getInstance(modal).close();
        //login olduktan sonra login modalının inputunun bilgilerini temizleyelim
        loginForm.reset();
    });
});


