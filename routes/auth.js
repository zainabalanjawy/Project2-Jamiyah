const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth");

router.get("/auth/signup", authCtrl.signUpPage);
router.get("/auth/signin", authCtrl.signInPage);
router.post("/auth/signup", authCtrl.signUpPagePost);
router.post("/auth/signin", authCtrl.signInPagePost);

router.get("/auth/signout", authCtrl.signout);
router.get("/auth/forget_password", authCtrl.forget_password_get);
router.post("/auth/forget_password", authCtrl.forget_password_post);

module.exports = router;
