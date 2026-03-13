const express = require("express");
const router = express.Router();
const logController = require("../controllers/logController");

router.get("/view", logController.viewLogs);

module.exports = router;