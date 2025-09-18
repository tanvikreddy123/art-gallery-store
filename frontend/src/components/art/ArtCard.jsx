import React from 'react';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import { getCurrentUser } from '../../services/authService';

const ArtCard = ({ artPiece }) => {
  const currentUser = getCurrentUser();

  // small client-side check for showing edit/delete only to owner
  const isOwner = currentUser && currentUser.id === artPiece.user;

  
  const priceLabel = Number(artPiece?.price ?? 0).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // fallback so broken links don't break the card 
  const handleImgError = (e) => {
    e.currentTarget.onerror = null; // avoid loop
    e.currentTarget.src = '/placeholder.jpg';
  };

  return (
    <div className='art-card'>
      <img
        src={artPiece.imageUrl}
        alt={artPiece.title}
        className="art-card-image"
        loading="lazy"
        onError={handleImgError}
      />


      <div className='art-card-content'>
        <h3 className='art-card-title'>{artPiece.title}</h3>
        <p className='art-card-artist'>by {artPiece.artist}, {artPiece.year}</p>
        <p className='art-card-price'>{priceLabel}</p>
      </div>

      <div className='art-card-actions'>
        <Link to={`/art/details/${artPiece._id}`}>
          <BsInfoCircle />
        </Link>

        {/* shows edit/delete only when user owns this item */}
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
      </div>
    </div>
  );
};

export default ArtCard;
