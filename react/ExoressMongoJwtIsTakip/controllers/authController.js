//signup(register) ve login işlemlerine ihtiyacım var. Bu işlemleri api olarak yapmayacağım için sayfalarınada ihtiyacım var yani get işlemlerine.
//modeli çekelim kullanıcaz onu burda.
const User = require("../models/User");
//jwt
const jwt = require("jsonwebtoken");
//validation hatalarını ayrı bir fonksiyonda yakalayabiliriz. Bu sayede validation mesajlarını istediğimiz formatta kullanıcıya gösterebiliriz. Özelleştirme yapıyoruz yani mesajları.
const HataYakala = (hata) => {
    let errors = {email: "", parola:""};
    if(hata.code === 11000){
        //herşeyi tüm kontrolleri geçti ancak kullanıcı veritabanında mevcutmuş email bilgisi.
        errors.email = "Bu mail adresi veritabaninda bulunuyor";
        return errors;
    }
    //user validation failed olduysa
    if(hata.message.includes("user validation failed")){
        Object.values(hata.errors).forEach((properties)=>{
            errors[properties.path] = properties.message;
        });
    }
    //oluşturdugumuz login hatalarını yakala
    if(hata.message === "email-hatasi"){
        errors.email = "email adresini yanlis girdiniz!";
    }
    if(hata.message === "parola-hatasi"){
        errors.parola = "parolayi yanlis girdiniz!";
    }

    return errors;
}

//ayrı bir fonksiyonda jsonwebtoken oluşturma işlemi yapalım
//expiresIn ile tokenın son kullanma tarihi bunu cookie ile aynı yapıcaz.
const maxAge = 3*24*60*60*1000;
const CreateToken = (id) =>{
    return jwt.sign({id}, "aos-software", {
        expiresIn: maxAge
    });
}

//get işlemi yapan araüyüz kısmı registerin.
module.exports.SignupGet = (req,res) => {
    res.render("signup");
}

//login get işlemi yapan arayüz kısmı
module.exports.LoginGet = (req,res) => {
    res.render("login");
}


//bu login ve signup için birde post işlemlerine ihtiyacım var veri gönderimi için.
module.exports.SignupPost = async (req,res) => {
    //burada veritabanıyla bağlantı kurucaz bu yüzden bu metot async olmak zorunda.
    //kullanıcının girdiği bilgileri req.body ile yakalıyoruz.
    //bu req.body bilgisini html sayfasında fetch metotuyla doldurucaz.
    const {email,parola} = req.body;
    //bu girilen bilgileri kullanarak dbye ekleme yapalım
    try {
        const user = await User.create({email,parola});
        //burda json metotu ile user bilgisini json şekilde postmande görebiliyoruz.
        //user create olduktan sonra token üretelim
        const token = CreateToken(user._id);
        //oluşan tokeni cookie içine yerleştir
        res.cookie("jwt", token, {httpOnly:true,maxAge:maxAge});
        //burdaki .json() metotuna verilen bilgi istek sonucunda cevap olarak gönderilir.
        res.status(201).json(user);
    } catch (error) {
        //res.status(400).send("hata olustu kullanici olusmadi" + error);
        const errors = HataYakala(error);
        res.status(400).json({errors});
    }
}
module.exports.LoginPost = async (req,res) => {
    //burdaki req.body bilgisi login sayfasındaki scriptteki fetch ile dolacak.
    const {email,parola} = req.body;
    try {
        const user = await User.login(email,parola);
        const token = CreateToken(user._id);
        res.cookie("jwt",token,{httpOnly:true, maxAge:maxAge});
        res.status(200).json({user:user._id});
    } catch (error) {
        const errors = HataYakala(error);
        res.status(400).json({errors});
    }
}


//cikis islemi
module.exports.LogoutGet = (req,res) => {
    //cookie silme veya veriyi değiştirme işlemi yaparız.
    //silme islemi
    res.cookie("jwt","cikis yapildi",{maxAge:1});
    res.redirect("/");
}