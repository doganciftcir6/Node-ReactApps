//bir nesne oluşturup içine elemanlar atalım.
//burada ben hardDisk1 hardDisk2 şeklinde sayıları yazmak istemiyorsam sembolleri kullanabilirim. Burdaki degerlerim aynı olursa sadece birisini alırdı. Sembol kullanarak aynı hardDisk ifadesini yazdırabiliyoruz 2 3 veya çok defa. Yani aynı özelliğe sahip farklı veriler tutabiliyoruz.
var bilgisayar = {}
bilgisayar.marka = "msi";
bilgisayar["hardDisk1"] = "sata";
bilgisayar["hardDisk2"] = "ssd";

console.log(bilgisayar);

//sembol oluşturma
const sembol1 = Symbol("deger");
const sembol2 = Symbol("deger");
console.log(sembol1,sembol2);

const hardDiskSembol1 = Symbol("hardDisk");
const hardDiskSembol2 = Symbol("hardDisk");

var bilgisayar2 = {}
bilgisayar.marka = "msi";
bilgisayar[hardDiskSembol1] = "sata";
bilgisayar[hardDiskSembol1] = "ssd";

console.log(bilgisayar2);

