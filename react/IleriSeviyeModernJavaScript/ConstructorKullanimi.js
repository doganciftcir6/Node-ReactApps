//ben sınıf örnegi oluştururken kullanıcı kendi bilgilerini girsin hepsinin bilgisi aynı olmasın diye constructora parametre olarak proplarımı veriyorum kullanıcı bu consta parametreleri newleme sırasında gönderir ve constractor bu bilgileri classın kendi proplarına aktarır. This burda Personel classının proplarını ifade eder.

//class oluşturalım
class Personel{
    //özellik propları ayarlayalım
    constructor(ad, birim, gorev){
        this.ad = ad,
        this.birim = birim,
        this.gorev = gorev
    }
}
const personel1 = new Personel("Ali","Bilgi Islem","Yazilim");
const personel2 = new Personel("Esra","Mali Isler","Muhasebe");
console.log(personel1);
console.log(personel2);