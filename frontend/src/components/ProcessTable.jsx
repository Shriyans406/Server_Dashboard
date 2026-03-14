import { useEffect, useState } from "react";
import axios from "axios";

function ProcessTable() {
  const [processes, setProcesses] = useState([]);

  const fetchProcesses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/process/list");

      const lines = res.data.processes.split("\n").slice(1);

      const parsed = lines.map((line) => {
        const parts = line.trim().split(/\s+/);

        return {
          pid: parts[0],
          command: parts[1],
          cpu: parts[2],
          mem: parts[3],
        };
      });

      setProcesses(parsed);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProcesses();

    const interval = setInterval(fetchProcesses, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Running Processes</h2>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>PID</th>
            <th>Command</th>
            <th>CPU %</th>
            <th>MEM %</th>
          </tr>
        </thead>

        <tbody>
          {processes.map((p, index) => (
            <tr key={index}>
              <td>{p.pid}</td>
              <td>{p.command}</td>
              <td>{p.cpu}</td>
              <td>{p.mem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProcessTable;
