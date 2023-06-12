const express = require('express')

const router = express.Router()

const jamiyahController = require('../controllers/jamiyah')


router.get("/jamiyah/home", loggedIn,jamiyahController.jamiyah_home_get);
router.get("/jamiyah/details", loggedIn,jamiyahController.jamiyah_details_get);
router.get("/jamiyah/create", loggedIn, jamiyahController.jamiyah_create_get);

router.post("/jamiyah/details", jamiyahController.jamiyah_details_post);

// router.post('/jamiyah/delete', jamiyahController.jamiyah_delete)

router.post("/jamiyah/create", jamiyahController.jamiyah_create_post);

module.exports = router;
