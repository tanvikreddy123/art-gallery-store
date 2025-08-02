import axios from 'axios';

// Create a new Axios instance with a base URL for our API.
const api = axios.create({
  baseURL: '/api', 
});

// This interceptor function runs before each request is sent.
// Its purpose is to automatically attach the JWT token to every outgoing request,
// so we don't have to do it manually in every component.
api.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // If the token exists, add it to the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;