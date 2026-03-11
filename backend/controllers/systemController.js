const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.getCPU = async (req, res) => {
  try {
    const script = path.join(__dirname, "../scripts/system/cpu_usage.sh");
    const result = await runScript(script);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
