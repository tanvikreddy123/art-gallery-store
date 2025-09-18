import { jwtDecode } from 'jwt-decode';

export const logout = () => {
  localStorage.removeItem('token');
};

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      return { id: decodedToken.id };
    }
    return null; 
  } catch (error) {
    console.error('Error decoding token:', error);
    return null; 
  }
};