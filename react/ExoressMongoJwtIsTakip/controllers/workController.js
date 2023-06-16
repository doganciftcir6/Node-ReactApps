const Work = require("../models/Work");

//önce iş ekleme sayfasının görünümü için get
module.exports.WorkAddGet = (req,res) =>{
    res.render("work-add");
}

module.exports.WorkAddPost = async (req,res) =>{
    //viedaki bodyden verileri yakalamamız lazım
    const {baslik, aciklama, baslama, bitis} = req.body;
    try {
        //ekleme işlemini gerçekleştiririz.
        const work = await Work.create({
            baslik:baslik,
            aciklama:aciklama,
            baslamaZamani:new Date(baslama),
            bitisZamani: new Date(bitis),
            kullaniciId: res.locals.user._id
        });
        res.status(200).json({work:work._id});
    } catch (error) {
        res.status(400).json({error});
    }
}

//işlerin listeneceği sayfayı oluşturalım
module.exports.WorksGet= (req,res) => {
    //getall yapıcaz işleri ancak bu listelemeyi kullaniciId ye özel yapıcaz. Yani kullanıcı tüm iişleri değil sadece kendi işlerini görecek.
    Work.find({"kullaniciId":res.locals.user._id}).then((result) => {
        res.render("works", {isler:result});
    });
}

