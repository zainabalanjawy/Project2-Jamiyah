const express = require('express')

const router = express.Router()

const userController = require('../controllers/user')

router.get("/user/profile", userController.user_profile_get);
router.post("/user/profile", userController.user_profile_post);


module.exports = router;