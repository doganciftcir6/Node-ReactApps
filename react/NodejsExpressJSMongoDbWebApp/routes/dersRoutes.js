// dersler ile ilgili bütün routeları app.js sayfasından buraya alabiliriz
//bu sayede app.js yi daha düzenli bir hale getiririz. Karışıklıktan kurtuluruz.

const express = require("express");
const Ders = require("../models/ders");
//artık app. yerine bu routeri kullanıcaz ve böylece router işlemiyle yönlendirme işlemini gerçekleştiricez.
const router = express.Router();
const dersController = require("../Controllers/dersController");


//şimdi mongodbden tüm belge kayıtlarımızı çekip o bilgileri dinamik olan ejs html sayfamıza gönderip orda bu kayıtları gösterelim.
//artık bu tüm kayıtları çeken metotu controllerdan getirebilirim.
router.get("/", dersController.GetAll);

//html sayfasındaki formdan mongodbye kayıt ekelemesi yapıcaz. Veriyi middlewear kullanrak şifrelemeyi unutma yukarıda. App.js sayfasında kaldı middlewear.
router.post("/", dersController.Insert);

//getbyid ile anasayfadan üstüne tıklanılan dersleri ilgili id ile ilgili dersin detay sayfasına yönlnedirme işlemi yapalım. urlde :id ile ilgili idyi yaklayabiliyorum expressjste.
router.get("/:id", dersController.GetById);

//detay sayfasındaki silme butonuyla ilgili idli kaydı silelim
router.delete("/:id", dersController.Delete);

//oluşan routeri dışarıya aç
module.exports = router;