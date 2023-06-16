//koleksiyonlara erişmek
//parametre olarak koleksiyon ismini gönderiyoruz
console.log(db.collection("haberler"));
//koleksiyonun içerisindeki verilere, firestore a erişmek için
//önce koleksiyonun tamamını bir almalıyım.
//get() ile getir dicez ama get promise olduğu için then ve catch metotlarına ihtiyaç var.
//then eğer sorgu olumluysa doğru verileri getirecek. Then içerisinde snapshot parametresi alacak bir callback fonkisyonu tanımlayacam gelen bilgileri bu snapshot içerisinde tutucaz.
db.collection("haberler").get().then((snapshot) => {
    //burdaki snapshot haberler koleksiyonumuz oluyor
    console.log(snapshot);
    //haberler koleksiyonu içindeki belgeleri yani dökümanları getiricem. Doclar arraydir. ilk belgeyi getirebiliriz. Onunda bir çok özelliği var data() metotu ile içerisindeki verileri getirebilirim. Object türünde ilk veriyi belgeyi getirmiş olurum.
    console.log(snapshot.docs[0].data());
    //bütün belgeleri verileri getirmek için ise arrayda foreach atabiliriz;
    snapshot.docs.forEach((item) => {
        console.log(item.data());
        //sadece ad özelliğini getirmek istersek sonuçta gelen değerler object olduğu için .ad diyerek ilgili keye ulaşabiliriz.
        console.log(item.data().ad);
        //tarih yazdığımız zaman ho türünde getiriyor. saniyeye kadar günü düşürmüş. toDate() metotu ile burada bulunan timestampi tarihe göre ayarlarız.
        console.log(item.data().tarih.toDate());
    });
    //catch ile oluşabilecek hataları yakalayım promise olduğu için.
}).catch((err) => {
    console.log(err);
});



//index.html sayfasındaki butonumuz tetiklendiği zaman burada oluşturacağımız veriyi firestore a ekleme yapalım
const button = document.querySelector("button");
button.addEventListener("click", () => {
    //haberler koleksiyonu içerisine belge eklememiz lazım. Önce bu belgeden bir nesne üretmeli bu nesnenin içerisinde de firestordaki belgedeki nesnein özelliklerinin olmasına özen göstermeleyiz. Tarih timestamp olmalı.
    const now = new Date();
    var haber = {
        ad: "haber 3",
        icerik: "icerik 3",
        tarih: firebase.firestore.Timestamp.fromDate(now),
    };
    //haberi artık firestore a ekleyebiliriz. Add metotu promise olduğu için then ve catchleri bize geri döndürebiliyor. Then ile döndüyse haberin eklendiğini catch ile döndüyse ekleme işleminin başarısız olduğunu anlıyoruz.
    //burada eğer haberler koleksiyonumuz olmasaydı önce haberler koleksiyonunu oluşturudu sonra içerisine belge eklerdi
    db.collection("haberler").add(haber).then(()=>{
        console.log("haber eklendi");
    }).catch(() => {
        console.log("ekleme islemi basarisiz");
    });
});



//veri silme şimdilik id yi kopyalayıp kullanarak silme yapıcaz belgenin idsine ihtiyacımız var. Sadece id ye değil bütün belgeye ihtiyacım var silmek için. Sil butonumuz olsun click olduğunda belgeyi silme işlemi yapsın.
const silButonu = document.querySelector(".sil");
silButonu.addEventListener("click", () => {
    //silinecek olan belgeyi bulmam lazım ilk olarak. İdsi ile bu belgeyi çekelim.
    const silinecekBelge = db.collection("haberler").doc("JEMrqs6KMhlNL8iNv5Hc");
    console.log(silinecekBelge);
    //artık bu belgeyi silebilirim delete fonksyionu promise oldugu için then catch ile işlem sonuclarını yakalayabiliriz.
    silinecekBelge.delete().then(() => {
        console.log(`${silinecekBelge.id} belgesini silme islemi basarili`);
    }).catch(()=>{
        "silme islemi basarisiz"
    });
});


//firestoredaki değişiklikleri uygulama üzerinden dinlemek ve değişiklik olduğunda nasıl bir cevap verebilecez. onSnapshot() metotu yukarıda kullandığımız get() metotu ile birebir yani aynı getirme işlemi yapıyor. docChanges() metotu var bununla değişiklikleri yakalayabiliyorum. Aynı metot get() tede var. Ancak biz değişikliği yakalamak istediğimizde onSnapshot() metotunu kullanırız. Get metotumuz bir promise gidiyo cevabı alyıor geliyor sürekli bir dinleme yok sürekli dinleme hali onSnapshot() ta var.
db.collection("haberler").onSnapshot((snapshot) => {
    console.log(snapshot.docChanges());

    //burada firestore ile aramızda bir telefon açılıyor ve sürekli olarak ordaki değişiklikleri dinleyebiliyorum
    //belgenin değişiklik anında birden fazla değişikliği olabilir o yüzden dizi gibi düşünüp foreach atarız.
    snapshot.docChanges().forEach((change) => {
        //modify removed added gibi değişikliklerimiz vardı. Onları bu change ile gösteriyoruz yani veri eklendiğinde added olur silindiğinde removed gibi.
        console.log(change);
        //burdaki changein tiğine erişebiliyorum bu değişikliğin belgesine ulaşalım
        const doc = change.doc;
        if(change.type === "added"){
            //yeni bir veri eklenmiş bu belgenin verisine erişebilirim.
            console.log(doc.data(),doc.id);
        }
        else if(change.type === "removed"){
            //silme işlemi gerçekleşmiş
            console.log(doc.id);
        }
    });
});

