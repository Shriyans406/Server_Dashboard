import { useEffect, useState } from "react";
import axios from "axios";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

function SystemCharts() {

    const [data, setData] = useState([]);

    const fetchMetrics = async () => {
        try {

            const cpu = await axios.get("http://localhost:5000/api/system/cpu");
            const memory = await axios.get("http://localhost:5000/api/system/memory");
            const disk = await axios.get("http://localhost:5000/api/system/disk");

            const newPoint = {
                time: new Date().toLocaleTimeString(),
                cpu: cpu.data.value,
                memory: memory.data.value,
                disk: disk.data.value
            };

            setData(prev => [...prev.slice(-9), newPoint]);

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {

        fetchMetrics();

        const interval = setInterval(fetchMetrics, 5000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div>
            <h2>System Performance</h2>

            <LineChart
                width={700}
                height={300}
                data={data}
            >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="time" />
                <YAxis />

                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="cpu" stroke="#ff0000" />
                <Line type="monotone" dataKey="memory" stroke="#00ff00" />
                <Line type="monotone" dataKey="disk" stroke="#0000ff" />

            </LineChart>

        </div>

    );
}

export default SystemCharts;