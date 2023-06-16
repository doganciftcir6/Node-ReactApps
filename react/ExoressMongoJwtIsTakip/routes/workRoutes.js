const {Router} = require("express");
const workController = require("../controllers/workController");
const {AuthControl, KullaniciKontrol} = require("../middleware/authMiddlewear");

const router = Router();

//bu endpointe sadece giriş yapmış kullanıcılar girebilsin
router.get("/work-add", AuthControl, workController.WorkAddGet);
router.post("/work-add", KullaniciKontrol, workController.WorkAddPost);

//kullanıcınınİd sine göre isleri listeleyen rota
router.get("/works", AuthControl, workController.WorksGet);

module.exports = router;