const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.getCPU = async (req, res) => {
  try {
    const script = path.join(__dirname, "../scripts/system/cpu_usage.sh");
    const output = await runScript(script);

    const value = output.split("=")[1];

    res.json({
      metric: "cpu",
      value: Number(value)
    });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.getMemory = async (req, res) => {
  try {
    const script = path.join(__dirname, "../scripts/system/memory_usage.sh");
    const output = await runScript(script);

    const value = output.split("=")[1];

    res.json({
      metric: "memory",
      value: Number(value)
    });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.getDisk = async (req, res) => {
  try {
    const script = path.join(__dirname, "../scripts/system/disk_usage.sh");
    const output = await runScript(script);

    const value = output.split("=")[1];

    res.json({
      metric: "disk",
      value: Number(value)
    });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.getUptime = async (req, res) => {
  try {
    const script = path.join(__dirname, "../scripts/system/uptime.sh");
    const output = await runScript(script);

    const value = output.split("=")[1];

    res.json({
      metric: "uptime",
      value: value
    });

  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
