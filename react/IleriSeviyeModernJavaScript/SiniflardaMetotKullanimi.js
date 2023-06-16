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
const personel1 = new Personel("Ali","Bilgi Islem","Yazilim");
const personel2 = new Personel("Esra","Mali Isler","Muhasebe");
console.log(personel1);
console.log(personel2);


//simdi metotu kullanalım bu metot personel1 özellikleri ile çalışacaktır çünkü personel1 i newleyip onun üzerinden çağırdık.
personel1.IsYap();
personel1.ToplantiyaGir();
//bu şekilde kullanabiliriz eğer ard arda kullanmak istersek metotta this ifade return etmeliyiz this ifadesi metota tekrar nesne özelliği kazandırır. Burda ISYap() metotu çalıştıktan sonra artık nesne özelliğini kaybeder . diyip diğer metoda erişim sağlayamayız.
//yeni aşağıdaki kullanım için metotta this return etmeliyiz.
personel1.IsYap().ToplantiyaGir();