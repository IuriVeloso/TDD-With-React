import axios from "axios";

const api = axios.create({ baseURL: 'https://tddlivereact.getsandbox.com:443' });

export default api;
