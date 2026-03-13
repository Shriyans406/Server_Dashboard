const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/serviceController");

router.get("/status", serviceController.status);

router.post("/start", serviceController.start);

router.post("/stop", serviceController.stop);

router.post("/restart", serviceController.restart);

module.exports = router;