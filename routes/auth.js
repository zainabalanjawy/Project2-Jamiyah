const express = require("express");
const router = express.Router();

const authCtrl = require("../controllers/auth");

router.get("/auth/signup", authCtrl.signUpPage);
router.get("/auth/signin", authCtrl.signInPage);
// router.post("/auth/signup", authCtrl.signUpPagePost);
// router.post("/auth/signin", authCtrl.signInPagePost);

// router.get("/auth/logout", authCtrl.logout);

module.exports = router;
