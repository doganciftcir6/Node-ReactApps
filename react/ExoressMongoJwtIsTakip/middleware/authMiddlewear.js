const jwtoken = require("jsonwebtoken");
const User = require("../models/User");

//giriş yapılıp yapılmadığını kontrol eden fonksiyon
const AuthControl = (req,res,next) => {
    //token bilgisini cookie içine yazdırmıştık dolayısıyla cookie üzerinden tokena eriş.
    const token = req.cookies.jwt;
    if(token){
        //token var kullanici login olmus
        //tokeni açıcaz
        jwtoken.verify(token,"aos-software",(err,result) => {
            if(err){
                //hata varsa
                //console.log(err.message);
                res.redirect("/login");
            }
            else{
                //hata  yoksa
                //console.log(result);
                next();
            }
        });
    }
    else{
        //token yok kullanici login olmamis
        res.redirect("/login");
    }
}

//kullanıcı ıdye erişip kontrol etme işlemi yapan fonkisiyon. Giriş yapmış olan userin bilgisini alıp local user bilgisini doldurmuş oluyoruz aslında.
//bu local değişken bilgisi sayesinde yani aslında bu metot sayesinde navbarda kullanıcı giriş yapmışsa giriş yap butonu kaybolsun gibi ayarlamaları yapabilicez. Ayrıca giriş yapmış kullanıcnın bilgilerini sayfaya çekebilicez.
const KullaniciKontrol = (req,res,next) => {
    //tokena ulas
    const token = req.cookies.jwt;
    if(token){
        //token varsa
        jwtoken.verify(token,"aos-software",async (err,result) => {
            if(err){
                //hata varsa local bir değiken tanımla ve bu değişkeni null olarak ata, useri doldurma islemi yapamayız.
                res.locals.user=null;
                next();
            }
            else{
                //hata yok local değişkende useri doldur.
                let user = await User.findById(result.id);
                res.locals.user = user;
                next();
            }
        });
    }
    else{
        //token yoksa
        res.locals.user = null;
        next();
    }
}


module.exports = {AuthControl,KullaniciKontrol}