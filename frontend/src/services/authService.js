import { jwtDecode } from 'jwt-decode';

// Removes the user's token from localStorage to end their session.
export const logout = () => {
  localStorage.removeItem('token');
};

// Checks if a token exists in localStorage to determine if the user is logged in.
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  // The '!!' operator converts the token string (or null) to a boolean.
  return !!token;
};

// Decodes the JWT from localStorage to retrieve the user's information.
// Specifically, it extracts the user's ID, which is needed for authorization checks.
export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      // The user ID is stored in the 'id' field of our token's payload.
      return { id: decodedToken.id };
    }
    return null; 
  } catch (error) {
    console.error('Error decoding token:', error);
    return null; // An invalid token is treated as no user.
  }
};