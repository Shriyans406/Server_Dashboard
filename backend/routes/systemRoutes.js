const express = require("express");
const router = express.Router();
const systemController = require("../controllers/systemController");

router.get("/cpu", systemController.getCPU);
router.get("/memory", systemController.getMemory);
router.get("/disk", systemController.getDisk);
router.get("/uptime", systemController.getUptime);

module.exports = router;
