const express = require('express')

const router = express.Router()

const accountController = require('../controllers/account')
const loggedIn = require("../lib/loggedin");


router.get("/account/details",accountController.account_details_get);
router.post("/account/details",accountController.account_balance_post);
router.get("/account/delete",accountController.account_delete_post)

module.exports = router;