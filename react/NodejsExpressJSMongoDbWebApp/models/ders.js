// modeli mongoose ile oluşturucaz

const mongoose = require("mongoose");
//şema oluşturucaz, Şema oluşurken istediğim alanları ve kurallarını yazarım, string olsun zorunlu olsun gibi. Timestamps true yaptığımızda zamana göre ekleme işlemi gerçekleştirecek. CreateAt,UpdateAt bilgisi tutulur yani.
const Scehema = mongoose.Schema;
const dersSchema = new Scehema({
    baslik:{type:String,required:true},
    icerik:{type:String,required:true}
},{timestamps:true});

//model, ilk parametre modelin ismi ikinci olarak şeması, Burdaki isim veritabanına kayıt olacaktır. Koleksiyon ismi olacak yani.
const Ders = mongoose.model("Ders",dersSchema);

//bu modeli dışarıya açalım
module.exports=Ders;