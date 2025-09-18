import mongoose from 'mongoose';

const artPieceSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', 
    },
    
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ArtPiece = mongoose.model('ArtPiece', artPieceSchema);