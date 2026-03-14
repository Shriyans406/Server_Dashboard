const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.listLogs = async (req, res) => {
    try {

        const script = path.join(__dirname, "../scripts/logs/list_logs.sh");

        const output = await runScript(script);

        res.json({
            logs: output
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

exports.viewLog = async (req, res) => {
    try {

        const logFile = req.query.name;

        const script = path.join(__dirname, "../scripts/logs/view_logs.sh");

        const output = await runScript(`${script} ${logFile}`);

        res.json({
            content: output
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};