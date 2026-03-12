import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getCPU = () => API.get("/system/cpu");
export const getMemory = () => API.get("/system/memory");
export const getDisk = () => API.get("/system/disk");
export const getUptime = () => API.get("/system/uptime");
