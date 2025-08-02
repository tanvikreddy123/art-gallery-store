import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';

export const protect = async (req, res, next) => {
  let token;

  // The token is expected to be in the 'Authorization' header, prefixed with 'Bearer'.
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 1. Get token from header (by removing the 'Bearer ' prefix)
      token = req.headers.authorization.split(' ')[1];

      // 2. Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // 3. Get the user from the token's payload and attach it to the request object.
      // This makes the user's information available in all subsequent protected routes.
      // We exclude the password from the user object for security.
      req.user = await User.findById(decoded.id).select('-password');
      
      if(!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};