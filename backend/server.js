/**
 * Main entry for the backend. Initializes Express, middleware, DB, and routes.
 */
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import artPieceRoutes from './routes/artPieces.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.json());

const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:5173', 'http://127.0.0.1:5173'].filter(Boolean);
app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

connectDB();

app.get('/', (req, res) => {
  res.send('Art Gallery API is running...');
});

app.use('/api/artpieces', artPieceRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5555;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
