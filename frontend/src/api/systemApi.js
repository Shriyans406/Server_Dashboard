import axios from "axios";

const API = "http://localhost:5000/api/system";

export const getCPU = () => axios.get(`${API}/cpu`);
export const getMemory = () => axios.get(`${API}/memory`);
export const getDisk = () => axios.get(`${API}/disk`);
export const getUptime = () => axios.get(`${API}/uptime`);