//süper ile miras aldığımız classta miras alınan özelliklere erişebiliyoruz.

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
    //ekstra olarak prop tanımlamak istediğimde yeni bir constructor tanımlayacam. Böyle yaptığımızda süper constractıra ihtiyac duyarız. Personel içerisindeki kullanacağımız propları çağırmamız gerekiyor. Constructor olmasaydı personel classındaki tüm propalrı kullanabiliyordum. Ancak bu classa yeni bir prop kazandırmak için constructor kullanamm lazım ve personal proplarınada erişebilmek için super özelliğini kullanmam lazım. Ayrıca o propları constr a tekrar tanımlalmız gerekli.
    constructor(ad, birim, gorev, unvan){
        //super burda bulanan propları ana classtaki yani Personeldeki constractıra bu propları yollayacak.
        //eger burda eksik prop gönderirsek o propun degeri undefined olarak kalacaktır.
        //buradaki sıralama önemlidir çünkü değişmez ana classa göre şekil alır ordaki const parametresine göre. Ama tam prop isimlerini yazamak zorunda değiliz ad yerine a yasakta olurdu mesela.
        super(ad,birim,gorev)
        this.unvan = unvan;
    }
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

const yonetici = new Yonetici("Osman","Yonetim Birimi","Personeli Yonetmek", "Mudur");
yonetici.IsYap();
let calisanlar = [personel1,personel2,yonetici];
console.log(calisanlar);
yonetici.PersoneliKov(personel2);
console.log(calisanlar);