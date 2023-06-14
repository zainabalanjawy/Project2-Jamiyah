const express = require("express");

const router = express.Router();

const jamiyahController = require("../controllers/jamiyah");
const loggedIn = require("../lib/loggedin");

router.get("/jamiyah/home", loggedIn, jamiyahController.jamiyah_home_get);
router.get("/jamiyah/details", loggedIn, jamiyahController.jamiyah_details_get);
router.get("/jamiyah/create", loggedIn, jamiyahController.jamiyah_create_get);
router.post("/jamiyah/details", jamiyahController.jamiyah_details_post);
router.get("/jamiyah/delete", jamiyahController.jamiyah_delete);
router.post("/jamiyah/create", jamiyahController.jamiyah_create_post);
router.get("/jamiyah/history", jamiyahController.jamiyah_history);
// router.get("/jamiyah/home", jamiyahController.jamiyahs_history_filter);
// router.get("/jamiyah/home", jamiyahController.jamiyahs_home_filter);

module.exports = router;
