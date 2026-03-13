const path = require("path");
const runScript = require("../utils/scriptRunner");

exports.status = async (req, res) => {
    try {

        const service = req.query.name;

        const script = path.join(__dirname, "../scripts/services/service_status.sh");

        const output = await runScript(`${script} ${service}`);

        res.json({ status: output });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

exports.start = async (req, res) => {
    try {

        const service = req.body.name;

        const script = path.join(__dirname, "../scripts/services/start_service.sh");

        const output = await runScript(`${script} ${service}`);

        res.json({ result: output });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

exports.stop = async (req, res) => {
    try {

        const service = req.body.name;

        const script = path.join(__dirname, "../scripts/services/stop_service.sh");

        const output = await runScript(`${script} ${service}`);

        res.json({ result: output });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};

exports.restart = async (req, res) => {
    try {

        const service = req.body.name;

        const script = path.join(__dirname, "../scripts/services/restart_service.sh");

        const output = await runScript(`${script} ${service}`);

        res.json({ result: output });

    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};