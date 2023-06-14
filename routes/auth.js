const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth");

const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
  })
  let upload = multer({ storage: storage })

router.get("/auth/signup", authCtrl.signUpPage);
router.get("/auth/signin", authCtrl.signInPage);
router.post("/auth/signup", upload.single('profileImage'), authCtrl.signUpPagePost);
router.post("/auth/signin", authCtrl.signInPagePost);

router.get("/auth/signout", authCtrl.signout);
router.get("/auth/forget_password", authCtrl.forget_password_get);
router.post("/auth/forget_password", authCtrl.forget_password_post);

module.exports = router;
