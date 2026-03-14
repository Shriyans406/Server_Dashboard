import { useEffect, useState } from "react";
import { getProcesses, killProcess } from "../api/processApi";

function ProcessTable() {

    const [processes, setProcesses] = useState([]);

    const loadProcesses = () => {
        getProcesses().then(res => {
            if (Array.isArray(res.data)) {
                setProcesses(res.data);
            } else if (res.data.processes) {
                setProcesses(res.data.processes);
            } else {
                setProcesses([]);
            }
        });
    };

    useEffect(() => {
        loadProcesses();
    }, []);

    const handleKill = (pid) => {
        killProcess(pid).then(() => {
            loadProcesses();
        });
    };

    return (
        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-4">Running Processes</h2>

            <table className="w-full border">

                <thead>
                    <tr className="bg-gray-200">
                        <th>PID</th>
                        <th>Command</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {Array.isArray(processes) && processes.map((p, index) => (
                        <tr key={index} className="border">

                            <td className="p-2">{p.pid}</td>
                            <td className="p-2">{p.command}</td>

                            <td>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                    onClick={() => handleKill(p.pid)}
                                >
                                    Kill
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    );
}

export default ProcessTable;