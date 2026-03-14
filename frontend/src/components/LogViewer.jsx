import { useState } from "react";
import axios from "axios";

function LogViewer() {

    const [log, setLog] = useState("");

    const loadLog = () => {

        axios
            .get("http://localhost:5000/api/logs/view?name=auth.log")
            .then(res => {
                setLog(res.data.content);
            });

    };

    return (

        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">Log Viewer</h2>

            <button
                className="bg-purple-500 text-white px-3 py-1 mb-4"
                onClick={loadLog}
            >
                Load Logs
            </button>

            <pre className="bg-black text-green-400 p-4 h-64 overflow-scroll">
                {log}
            </pre>

        </div>

    );
}

export default LogViewer;