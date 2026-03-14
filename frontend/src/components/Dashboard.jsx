import { useEffect, useState } from "react";
import { getCPU, getMemory, getDisk, getUptime } from "../api/systemApi";

import ProcessTable from "./ProcessTable";
import ServicePanel from "./ServicePanel";
import LogViewer from "./LogViewer";

function Dashboard() {

  const [cpu, setCPU] = useState("");
  const [memory, setMemory] = useState("");
  const [disk, setDisk] = useState("");
  const [uptime, setUptime] = useState("");

  useEffect(() => {

    const fetchMetrics = () => {
      getCPU().then(res => setCPU(res.data.value));
      getMemory().then(res => setMemory(res.data.value));
      getDisk().then(res => setDisk(res.data.value));
      getUptime().then(res => setUptime(res.data.value));
    };

    fetchMetrics();

    const interval = setInterval(fetchMetrics, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Linux Server Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl">CPU Usage</h2>
          <p className="text-2xl">{cpu}</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl">Memory Usage</h2>
          <p className="text-2xl">{memory}</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl">Disk Usage</h2>
          <p className="text-2xl">{disk}</p>
        </div>

        <div className="bg-white shadow p-6 rounded">
          <h2 className="text-xl">System Uptime</h2>
          <p className="text-2xl">{uptime}</p>
        </div>

      </div>
      <ProcessTable />
      <ServicePanel />
      <LogViewer />

    </div>

  );
}

export default Dashboard;