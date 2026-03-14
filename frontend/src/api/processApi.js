import axios from "axios";

const API = "http://localhost:5000/api/process";

export const getProcesses = () => axios.get(`${API}/list`);
export const killProcess = (pid) => axios.post(`${API}/kill`, { pid }); 