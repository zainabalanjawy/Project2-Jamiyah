const express = require("express");

const router = express.Router();

const jamiyahController = require("../controllers/jamiyah");
const loggedIn = require("../lib/loggedin");

router.get("/jamiyah/home", jamiyahController.jamiyah_home_get);
router.get("/jamiyah/details", jamiyahController.jamiyah_details_get);
router.get("/jamiyah/create", loggedIn, jamiyahController.jamiyah_create_get);

router.post("/jamiyah/details", jamiyahController.jamiyah_details_post);
router.post("/jamiyah/create", jamiyahController.jamiyah_create_post);

module.exports = router;
