import axios from 'axios';

const raw = (import.meta.env?.VITE_API_BASE_URL || '').trim();
const cleaned = raw.replace(/\/+$/, '');

function computeBaseURL() {
  if (cleaned) {
    return cleaned.endsWith('/api') ? cleaned : `${cleaned}/api`;
  }
  if (typeof window !== 'undefined' && window.location.hostname.endsWith('.onrender.com')) {
    return 'https://art-gallery-backend-k6co.onrender.com/api';
  }
  return '/api';
}

const api = axios.create({ baseURL: computeBaseURL() });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
