import mongoose from 'mongoose';

const artPieceSchema = mongoose.Schema(
  {
    // The 'user' field links each art piece to its creator.
    // 'ref: 'User'' establishes a formal relationship with the User model,
    // which is crucial for authorization and populating user data.
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