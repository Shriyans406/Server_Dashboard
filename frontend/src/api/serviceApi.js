import axios from "axios";

const API = "http://localhost:5000/api/services";

export const serviceStatus = (name) =>
    axios.get(`${API}/status?name=${name}`);

export const startService = (name) =>
    axios.post(`${API}/start`, { name });

export const stopService = (name) =>
    axios.post(`${API}/stop`, { name });

export const restartService = (name) =>
    axios.post(`${API}/restart`, { name });