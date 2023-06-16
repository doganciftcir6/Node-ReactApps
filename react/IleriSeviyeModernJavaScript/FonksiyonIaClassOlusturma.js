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

const personel1 = new Personel("Ali","Bilgi Islem","Yazilim");
console.log(personel1);
personel1.IsYap();
personel1.SelamVer();