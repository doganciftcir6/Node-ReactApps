//auth routelarımı burda tanımlayacam
const router = require("express").Router();
//modeli çek
const User = require("../models/User");
//npm i @hapi/joi paketini indirerek model tarafında mongoose validation kullanarak ayarladığımız bir takım kuralları şimdi burada router içerisinde yakaladığımız requestin bodysi içinde bu validationlara uygun olmasını sağlatacak işlemler yapıcaz.
const Joi = require("@hapi/joi");
//bu validaion için bir şema oluşturammız lazım. Bu şema postmanın bodysine girilecek değerlere bakaıyor.
const validateSchema = Joi.object({
    isim:Joi.string().min(6).required(),
    email:Joi.string().min(6).required().email(),
    parola:Joi.string().min(6).required(),
});
//login işlemi içindevalidation şeması yapalım
const validateLoginSchema = Joi.object({
    email:Joi.string().min(6).required().email(),
    parola:Joi.string().min(6).required(),
});
//benim kullanıcının şifresini direkt olarak veritabanında tutmam lazım şifrelemem lazım dbye bu şifreyi göndermeden önce bunun için npm i bcryptjs paketini kuralım.
const bcrypt = require("bcryptjs");
//jason web token kullanabilmek için npm i jsonwebtoken paketine ihtiyacım var.
const jwt = require("jsonwebtoken");


//post işlemi ile kullanıcıyı veritabanına kaydedelim.
router.post("/register", async (req,res) => {
    //bodynin oluşturduğumuz validation şemasına uygun olup olmadığını kontrol edelim
    const {error} = validateSchema.validate(req.body);
    if(error){
        //burada validationa takılıyor
        return res.status(400).send(error.details[0].message);
    }

    //kullanıcının mailiin daha önceden db de var olup olmadığının kontrolünü yapmamız lazım. findOne() metotuyla bir tane kullanıcı bulması bizim için yeterli olacak. Burda await olmazsa bunun cevabını beklemeden kod akışı aşağıya devam eder ve validationa girmemiş olur. Db ile iletişim kuracağım için await yapmam lazım.
    const emailKontrol = await User.findOne({email:req.body.email});
    if(emailKontrol){
        //kullanıcı daha önce var
        return res.status(400).send("Email adresi daha önce kullanilmis");
    }

    //passwordu şifreleme döngüsünü oluşturalım. genSalt(10) metotunun parametresinde kaç döngü olacağını belirleyebiliyoruz.
    const salt = await bcrypt.genSalt(10);
    //döngü cevanına göre şifremi kriptolayalım hash() metotunun ilk parametresi şifrelenecek olan veridir. İkinci olarak salt değerini.
    const hashPassword = await bcrypt.hash(req.body.parola, salt);
    //artık kullanıcının girdiği parola hashlendi bunu alarak yeni kulanıcının parola bilgisine atabiliriz.

    const user = new User({
        //burda requestin bodysini okuyabilmem yani bana bodyden gönderilen bilgileri okuyabilmem için server tarafında middlewear kullanmam lazım unutma.
        isim: req.body.isim,
        email: req.body.email,
        parola: hashPassword
    });
    //kaydetme işlemi
    try {
        const savedUser = await user.save();
        //kaydedilmiş bu veriyi postmande gösterelim
        res.send({user:user._id});
    } catch (error) {
        //hata olursa statusu 400 yapalım
        res.status(400).send(error);
    }
});

//login işlemi yapalım
router.post("/login", async (req, res) => {
    //önce validation kontrolü yapalım
    const {error} = validateLoginSchema.validate(req.body);
    if(error){
        //hata var
        return res.status(400).send(error.details[0].message);
    }

    //şimdi bu kullanıcı db de var mı diye kontrol edeceğiz
    const kullanici = await User.findOne({email:req.body.email});
    if(!kullanici){
        //demek ki kullanıcı db de yok
        res.status(400).send("Email ya da parola bilgisini yanlis girdiniz.");
    }
    //şimdi email için bir kontrol yaptık şimdi kullanıcının yazdığı parolayı eski parola ile karşılaştırmak içni eski parolayı çözümleyerek bir kontrol yapmamız gerekiyor. compare() ilk parametre kullanıcının postman bodysinde girdiği veri olacak ikinci parametre ise kullanıcının çözümlenecek olan eski parolası olacak bir karşılaştırma yapmış olacağız.
    const parolaKontrol = await bcrypt.compare(req.body.parola, kullanici.parola);
    if(!parolaKontrol){
        //parolalar eşleşmiyor
        return res.status(400).send("Email ya da parola bilgsini yanlis girdiniz.");
    }

    //login işlemine uygun
    //token oluşturucaz sign() metotu ilk parametre olarak tokena sokacağımız gizleyeceğimiz veri, ikinci parametre olarak secret key istiyor. Kullanıcının id bilgisini bu key içinde tutmamız lazım. Kullanıcın id sini token işlemine sokuyorum. Token secret vererekte şiferyi çözeceğiz.  Tokenda ıdyi saklama sebebimiz ise kolay bir şekilde kullanıcının bilgilerine erişmek için.
    const token = jwt.sign({_id:kullanici._id}, process.env.TOKEN_SECRET);
    //başlık bilgisinde tokenı tutacağız
    res.header("auth-token",token).send(token);
});

module.exports = router;