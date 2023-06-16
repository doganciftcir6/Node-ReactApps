//constructor olnayacak fonlsiyon içinde olduğumuz için ama fonksiyon parametresiyle gelen değerleri this anahtar kelimesiyle konstraktır gibi tanımlıcaz.

//proplarımı parametreye yazıyorum
function Personel(ad,birim,gorev){
    this.ad = ad;
    this.birim = birim;
    this.gorev = gorev;

    //metot tanımlayalım
    this.IsYap = function(){
        console.log("is yapildi");
    };
}
//metotu ya içeride ya da prototype özelliği ile dışarıda tanımlayabiliyoruz bu yine bu classa ait oluyor. Böyle yapınca personel classının metotu prototype içinde saklanır. Direkt class proplarının yanında bu metot gözükmez. Proto içinde yer alır.
Personel.prototype.SelamVer = function(){
    //dışarıda olsak bile this ile yine bu classın proplarına erişim sağlarız.
    console.log(`${this.ad} merhaba.`);
}

//yeni bir class üretelim
function Yonetici(ad,birim,gorev,unvan){
    //ek olarak sdaece unvan propun olacak geri kalan proplarımı personel classından getirmek için call() metotunu kullanırım.
    this.unvan = unvan;
    //ilk parametrede thisi tanımlamalıyız this ile o personelin bütün özelliklerini getirmiş oluyoruz.
    Personel.call(this,ad,birim,gorev);
}
//yeni class için prototype sayesinde bir miras almam gerekiyor
//Object.create(); personelin prototypeını almam gerekiyor. Bu sayede personelin fonksiyonlarına sahip olacağım. Yani burada Personel classının prototype özelliklerini yonetici classına kazandıracağız.
Yonetici.prototype = Object.create(Personel.prototype);
//yonetici classına ayrı bir prototype tanımlamak için ise
Yonetici.prototype.PersonelKov = () => {
    console.log("personel kovuldu");
};

const personel1 = new Personel("Ali","Bilgi Islem","Yazilim");
console.log(personel1);
personel1.IsYap();
personel1.SelamVer();

const yonetici = new Yonetici("Osman","Bilgi Islem","Idare","Mudur");
yonetici.SelamVer();
yonetici.PersonelKov();
