const express = require("express");
const router = express.Router();
const processController = require("../controllers/processController");

router.get("/list", processController.listProcesses);

router.post("/kill", processController.killProcess);

module.exports = router;