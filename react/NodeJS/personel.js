const personeller = ["ali","osman"];
const birimler = ["bibd","muhasebe"];
console.log(personeller);

//bu dizime dışarıdan başka bir js dosyasından erişmek için module anahtar sözcüğüm ile bu bilgiyi dışarıya açmalıyım.
//artık personeller dışarıdan erişilebilir.
module.exports=personeller;
//eğer birden fazla bilgiyi dışarıya aktarmak istersek ise;
module.exports = {
    personeller,
    birimler
}