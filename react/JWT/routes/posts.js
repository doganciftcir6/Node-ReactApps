//sahte veri ekleyelim, veriye erişme işlemi yapıcaz res.json ile sahte json veriler göndericez. Yani sahte veriler getall yapan bir metotumuz olsun bu routta.
const router = require("express").Router();
const authVerify = require("./TokenDogrulama");

//bu route çalışması yani getall yapabilmesi için giriş yapmasını isteyeceğim bunun içinde token dogrulama islemini kullanacağım. Sadece giriş yapmış tokenı olan kullanıcılar buraya istek atabilsin istiyorum. authVerify yazıyorum parametreye kendisi artık otomatik olarak bu kontrol işlemini yapacak.
router.get("/", authVerify,(req,res)=>{
    res.json({
        posts:{
            baslik:"Post baslik",
            aciklama:"Post aciklama"
        }
    })
});

module.exports = router;