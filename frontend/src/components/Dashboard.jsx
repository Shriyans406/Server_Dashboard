import { useEffect, useState } from "react";
import { getCPU, getMemory, getDisk, getUptime } from "../api/apiClient";

function Dashboard() {

  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);
  const [disk, setDisk] = useState(0);
  const [uptime, setUptime] = useState("");

  const fetchData = async () => {
    const cpuRes = await getCPU();
    const memRes = await getMemory();
    const diskRes = await getDisk();
    const upRes = await getUptime();

    setCpu(cpuRes.data.value);
    setMemory(memRes.data.value);
    setDisk(diskRes.data.value);
    setUptime(upRes.data.value);
  };

  useEffect(() => {
    fetchData();
    setInterval(fetchData, 5000);
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">
        Linux Server Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-blue-500 text-white p-6 rounded-xl">
          CPU Usage: {cpu}%
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl">
          Memory Usage: {memory}%
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl">
          Disk Usage: {disk}%
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl">
          Uptime: {uptime}
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
