const {Router} = require("express");
const authController = require("../controllers/authController");

const router =Router();

//burada authControllerdaki metotları kullanarak route işlemleri yapıcaz.
router.get("/signup", authController.SignupGet);
router.post("/signup", authController.SignupPost);

router.get("/login", authController.LoginGet);
router.post("/login", authController.LoginPost);

//cikis islemi
router.get("/logout", authController.LogoutGet);


module.exports = router;
