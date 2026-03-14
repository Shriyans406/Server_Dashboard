import { useState } from "react";
import { startService, stopService, restartService } from "../api/serviceApi";

function ServicePanel() {

    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const handleStart = () => {
        startService(service).then(res => {
            setMessage(res.data);
        });
    };

    const handleStop = () => {
        stopService(service).then(res => {
            setMessage(res.data);
        });
    };

    const handleRestart = () => {
        restartService(service).then(res => {
            setMessage(res.data);
        });
    };

    return (
        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">Service Manager</h2>

            <input
                className="border p-2 mr-3"
                placeholder="service name"
                onChange={(e) => setService(e.target.value)}
            />

            <button
                className="bg-green-500 text-white px-3 py-1 mr-2"
                onClick={handleStart}
            >
                Start
            </button>

            <button
                className="bg-yellow-500 text-white px-3 py-1 mr-2"
                onClick={handleStop}
            >
                Stop
            </button>

            <button
                className="bg-blue-500 text-white px-3 py-1"
                onClick={handleRestart}
            >
                Restart
            </button>

            <p className="mt-3 text-green-600">{message}</p>

        </div>
    );
}

export default ServicePanel;