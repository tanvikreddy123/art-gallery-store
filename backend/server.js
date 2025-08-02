/**
 * Main entry point for the Art Gallery Store backend server.
 * This file initializes the Express app, sets up middleware, connects to the database,
 * and defines the API routes.
 */

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import artPieceRoutes from './routes/artPieces.js';
import authRoutes from './routes/auth.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Core Middleware
app.use(express.json());
app.use(cors());

// Establish connection to MongoDB
connectDB();

// --- API Route Handlers ---
app.get('/', (req, res) => {
  res.send('Art Gallery API is running...');
});

// Defines the primary API endpoints for the application
app.use('/api/artpieces', artPieceRoutes);
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));