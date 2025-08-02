import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { getCurrentUser } from '../../services/authService';

const ArtCard = ({ artPiece }) => {
    const currentUser = getCurrentUser(); 

  // This logic checks if the currently logged-in user is the owner of the art piece.
  // This is the client-side authorization check that determines whether to show
  // the edit and delete controls.
  const isOwner = currentUser && currentUser.id === artPiece.user;
  return (
    <div className='art-card'>
      <img src={artPiece.imageUrl} alt={artPiece.title} className='art-card-image' />
      <div className='art-card-content'>
        <h3 className='art-card-title'>{artPiece.title}</h3>
        <p className='art-card-artist'>by {artPiece.artist}, {artPiece.year}</p>
        <p className='art-card-price'>${artPiece.price.toLocaleString()}</p>
      </div>
      <div className='art-card-actions'>
        <Link to={`/art/details/${artPiece._id}`}>
          <BsInfoCircle />
        </Link>
        {/* Conditionally render the Edit and Delete icons only if the user is the owner */}
        {isOwner && (
          <>
            <Link to={`/art/edit/${artPiece._id}`}>
              <AiOutlineEdit />
            </Link>
            <Link to={`/art/delete/${artPiece._id}`} className='action-delete'>
              <MdOutlineDelete />
            </Link>
          </>
        )}
        {/* === END AUTHORIZATION CHECK === */}
      </div>
    </div>
  );
};

export default ArtCard;