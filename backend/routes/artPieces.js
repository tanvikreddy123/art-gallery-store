import express from 'express';
import { ArtPiece } from '../models/artPieceModel.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to create a new Art Piece.
// This route is protected, requiring a valid user session.
router.post('/', protect, async (request, response) => {
  try {
    const { title, artist, description, year, price, imageUrl } = request.body;

    if (!title || !artist || !year || !price || !imageUrl) {
      return response.status(400).send({
        message: 'Send all required fields: title, artist, year, price, imageUrl',
      });
    }

    const newArtPiece = { user: request.user._id, title, artist, description, year, price, imageUrl };
    const artPiece = await ArtPiece.create(newArtPiece);

    return response.status(201).send(artPiece);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get all Art Pieces from the database.
// This is a public route accessible to anyone.
router.get('/', async (request, response) => {
  try {
    const artPieces = await ArtPiece.find({});
    return response.status(200).json({
      count: artPieces.length,
      data: artPieces,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to get a single Art Piece by its ID.
// Also a public route.
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const artPiece = await ArtPiece.findById(id);
    if (!artPiece) {
        return response.status(404).json({ message: 'Art piece not found' });
    }
    return response.status(200).json(artPiece);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to update an Art Piece.
// This route is protected and includes an authorization check.
router.put('/:id', protect, async (request, response) => {
  try {
    const { id } = request.params;
    const artPiece = await ArtPiece.findById(id);

    if (!artPiece) {
      return response.status(404).json({ message: 'Art piece not found' });
    }

    // Authorization check: Before updating, we verify that the ID of the logged-in user
    // matches the user ID stored on the art piece.
    if (artPiece.user.toString() !== request.user._id.toString()) {
      return response.status(401).json({ message: 'User not authorized' });
    }
    

    const updatedArtPiece = await ArtPiece.findByIdAndUpdate(id, request.body, { new: true });

    return response.status(200).send({ message: 'Art piece updated successfully', data: updatedArtPiece });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to delete an Art Piece.
// This route is also protected with the same authorization logic as the update route.
router.delete('/:id', protect, async (request, response) => {
  try {
    const { id } = request.params;
    const artPiece = await ArtPiece.findById(id);

    if (!artPiece) {
      return response.status(404).json({ message: 'Art piece not found' });
    }

    // Authorization check ensures only the owner can delete their art piece.
    if (artPiece.user.toString() !== request.user._id.toString()) {
      return response.status(401).json({ message: 'User not authorized' });
    }
    

    await ArtPiece.findByIdAndDelete(id);

    return response.status(200).send({ message: 'Art piece deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;