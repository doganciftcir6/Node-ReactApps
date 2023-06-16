//class oluşturalım
class Personel{
    //özellik propları constructor içinde ayarlarız
    constructor(ad, birim, gorev){
        this.ad = ad,
        this.birim = birim,
        this.gorev = gorev
    }

    //metotları const dışında tanımlarız
    IsYap(){
        console.log(`${this.ad} ${this.gorev} isini gerceklestirdi.`);
        return this;
    }
    ToplantiyaGir(){
        console.log(`${this.ad} toplantiya girdi.`);
    }
}

//classlar miras aldığı classların bütün özelliklerini kendisine almış olurlar. extends anahtar sözcüğü ile bu classın miras alacağı classı belirtiriz.
//Yonetici classın Personel classının tüm prop ve metotlarına sahiptir ama kendi ek özellikleride olabilir.
class Yonetici extends Personel{
    PersoneliKov(personel){
        calisanlar = calisanlar.filter((p) => {
            return p.ad != personel.ad;
        });
    }
};



const personel1 = new Personel("Ali","Bilgi Islem","Yazilim");
const personel2 = new Personel("Esra","Mali Isler","Muhasebe");
console.log(personel1);
console.log(personel2);
personel1.IsYap().ToplantiyaGir();

const yonetici = new Yonetici("Osman","Yonetim Birimi","Personeli Yonetmek");
yonetici.IsYap();
let calisanlar = [personel1,personel2,yonetici];
console.log(calisanlar);
yonetici.PersoneliKov(personel2);
console.log(calisanlar);