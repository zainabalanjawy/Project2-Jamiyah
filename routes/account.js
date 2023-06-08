const express = require('express')

const router = express.Router()

const accountController = require('../controllers/account')

router.get("/account/details", accountController.account_details_get);
router.post("/account/details", accountController.account_details_post);

module.exports = router;