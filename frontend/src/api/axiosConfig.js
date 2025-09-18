import axios from 'axios';

// for prod, set VITE_API_BASE_URL to your backend: https://your-backend.onrender.com/api
// for dev, Vite proxy handles /api to http://localhost:5555
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({ baseURL });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
