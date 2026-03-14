const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");

router.get("/list", logController.listLogs);

router.get("/view", logController.viewLog);

module.exports = router;