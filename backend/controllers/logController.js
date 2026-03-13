const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.viewLogs = async (req, res) => {
    try {

        const logfile = req.query.file;

        const script = path.join(__dirname, "../scripts/logs/view_logs.sh");

        const output = await runScript(`${script} ${logfile}`);

        res.json({
            logs: output
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};