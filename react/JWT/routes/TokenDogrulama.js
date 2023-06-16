//burada token doğrulama işlemi yapıcaz
const jwt = require("jsonwebtoken");

//işlem bittiği zaman next ile bir sonraki adıma geçmemiz lazım. Yoksa döngü devam edecek
module.exports = function(req,res,next){
    //tokenı yakalamamız lazım header bilgisi içine aktarmıştık tokenı login tarafında.
    const token = req.header("auth-token");
    if(!token){
        //token yok
        return res.status(401).send("izin verilmedi");
    }
    //token var
    try {
        //bu tokenı açalım ve kullanıcı bilgisine erişelim verify() ile bilgiyi oluşturucaz. Bunun parametrelerine aynı token oluşturma işleminde olduğu gibi önce tokenı sonra secret keyi vermem lazım.
        const dogrulama = jwt.verify(token, process.env.TOKEN_SECRET);
        //token yeniden açılacak kullanicin idsi bize döndürlecek dogrulama degiskeni icerisine. Cünkü token içine kullanıid yi saklamıştık
        req.kullanici = dogrulama;
        console.log(req.kullanici);
        next();
    } catch (error) {
        res.status(400).send("yanlis token bilgisi");
    }
}