//class, bir nesne oluştururken onun iskeletini ya da modülünü oluşturmak için class kullanırız. Bu classı refrans alarak bir nesne oluşturur.
//Robot üreten bir fabriakada olduğumuzu düşünelim bir prototatip oluşutduk bu classı temsil eder. Bu prototipe bakarak birden fazla nesneler robotlar üretiliyor. Protatip beyaz veya siyah bir renkte olabilir ama oluşturlan bu robotlar farklı renklerde olabilir. Bu da nesnenin özelliğinden kaynaklanan bir durum.

//bu şekilde bir sürü aynı konuda nesnem olacaksa bunu her seferinde  tek tek tanımlamak yerine bunun bir protatipini yapıp ona bakarak nesneler üretebilirim.
let personel1 = {
    ad:"Ali",
    birim:"Bilgi İslem",
    gorev: "Yazilim"
}
console.log(personel1);

let personel2 = {
    ad:"Esra",
    birim:"Mali Isler",
    gorev: "Muhasebe"
}
console.log(personel2);


//class oluşturalım
class Personel{
    //özellik propları ayarlayalım
    constructor(){
        this.ad = "Ali",
        this.birim = "Bilgi Islem",
        this.gorev = "Yazilim"
    }
}
const personel5 = new Personel();