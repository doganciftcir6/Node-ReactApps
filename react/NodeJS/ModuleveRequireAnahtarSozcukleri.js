//bu konu anlatımı için personel.js dosyasını kullanacağız.

//ben personel.js dosyasında bulunan personeller dizime bu dosyadan ulaşmak istersem. Require anahtar sözcüğünü kullanırız. Ama önce orada bulunan dizimi dışarıdan erişilebilir hale getimem gerekiyor bunun için ise module.exports anahtar sözcüğünü kullanıyoruz.
const per = require("./personel");
console.log(per);

//birden fazla dışarıya açılmış bilgiye erişmek için ise
console.log(per.birimler);
console.log(per.personeller);
//veya
const {personeller,birimler} = require("./personel");
console.log(personeller);
console.log(birimler);

//kendi dosyamıza erişmeyi gösterdik bir de var olan dosyalara erişim sağlayalım os paketine erişelim.
//os burda işletim sistemini temsil ediyor. platform() metotu hangi platformu kullandığımızı, homedir() metotu hangi user bilgisini bu pcde kullandığımızın yolunu verir.
const os = require("os");
console.log(os.platform());
console.log(os.homedir());