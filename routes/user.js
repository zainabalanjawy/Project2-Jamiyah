const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");
const loggedIn = require("../lib/loggedin");

router.get("/user/profile", loggedIn, userController.user_profile_get);
router.post("/user/profile", userController.user_profile_post);

module.exports = router;
