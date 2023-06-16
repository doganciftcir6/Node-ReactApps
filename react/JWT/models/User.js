//bir model oluşturucam bunun için şema oluşturmam lazım.
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    isim:{type:String,required:true,max:255,min:6},
    email:{type:String,required:true,max:255,min:6},
    parola:{type:String,required:true,max:1024,min:6},
    tarih:{type:Date,default:Date.now}
});

//modeli oluştur bu şemaya göre
var userModel = mongoose.model("User",userSchema);


module.exports = userModel