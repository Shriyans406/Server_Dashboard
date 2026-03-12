const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.listProcesses = async (req, res) => {
    try {

        const script = path.join(__dirname, "../scripts/processes/list_processes.sh");

        const output = await runScript(script);

        res.json({
            processes: output
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

exports.killProcess = async (req, res) => {
    try {

        const pid = req.body.pid;

        const script = path.join(__dirname, "../scripts/processes/kill_process.sh");

        const output = await runScript(`${script} ${pid}`);

        res.json({
            result: output
        });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};