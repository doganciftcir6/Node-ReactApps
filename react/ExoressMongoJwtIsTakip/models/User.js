//model oluşturabilmek için şema oluşturucaz ardından bu şemayı kullanarak model oluşturucaz.
//validation işlemlerini daha da çeşitlendirmek için npm i validator paketini kurduk.
const {isEmail} = require("validator");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, "Mail adresini girmeniz zorunludur!"],
        unique:true,
        lowercase:true,
        validate:[isEmail, "Lutfen gecerli bir email adresi giriniz!"]
    },
    parola:{
        type:String,
        required:[true, "Parolayi girmeniz zorunludur!"],
        minlength:[6, "Parolayi Minimum 6 karakter giriniz!"]
    }
});

//mongoose hooks ile kontrol veri kaydedilme veya keydedilmeden önce yapılacak işlemleri gerçekleştirebileceğimiz fonksiyonlardır, post metotu oluşturduğumuz şema veritabanına kaydedildikten sonra çalışacak bir işlemi gerçekleştiriyor.
//bu metotları parolayı şifrelemek için kullanabiliriz.
userSchema.post("save", function(doc,next){
    //doc parametresi ile kaydedilen veriye erişiriz.
    console.log("kaydedildikten sonra calisacak",doc);
    //next ile işlemi devam ettirmemiz gerekiyor.
    next();
});
//kayıt işlemi yapılmadan önce çalışacak halin ise pre() metotu ile yaparız. Ancak burda veri olmadığı için doc parametresini kullanamıyoruz. Ancak kaydedilecek olan veriye this anahtar sözcüğüyle ulaşmak mümkün. Userin kaydı yapılmadan önce passwordunu şifreleyebiliriz.
userSchema.pre("save", async function(next){
    //console.log("kaydedilmeden once calisacak", this);
    //user şifresini kriptola
    const salt = await bcrypt.genSalt();
    //this burda kaydedilecek olan veriyi tutuyor.
    //şifrelenmiş parolayı kullanıcının kaydının parola kısmına gönderip öyle create işlemi yapılır.
    this.parola = await bcrypt.hash(this.parola,salt);
    next();
});

//login işlemi için kullanıcı db de var mı yok mu diye check yapan bir static yardımcı metot yapıcam burda. Bu şemayı kullanarak bir kontrol yapıcaz.
userSchema.statics.login=async function(email, parola){
    const user = await this.findOne({email});
    if(user){
        //kullanıcı db de varmış bu sefer auth olup olmadığına bakmalıyız
        const auth = await bcrypt.compare(parola,user.parola);
        if(auth){
            //parolalar eşleşti ben artık kullanıcıyı döndürebilirim
            return user;
        }
        throw Error("parola-hatasi");
    }
    throw Error("email-hatasi");
}

//şemayı kullan modeli oluştur model metotunun parametresindeki "user" koleksiyonun ismi olacak.
const User = mongoose.model("user", userSchema);

module.exports = User;