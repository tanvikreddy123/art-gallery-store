import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';

const ViewArtPage = () => {
  const [artPiece, setArtPiece] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/artpieces/${id}`)
      .then((response) => {
        setArtPiece(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className='container'>
      <h1 style={{textAlign: 'center'}}>Artwork Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='art-details'>
            <div className='art-details-image'>
                <img src={artPiece.imageUrl} alt={artPiece.title} />
            </div>
            <div className='art-details-info'>
                <h1>{artPiece.title}</h1>
                <span><strong>Artist:</strong> {artPiece.artist}</span>
                <span><strong>Year:</strong> {artPiece.year}</span>
                <span><strong>Price:</strong> ${artPiece.price?.toLocaleString()}</span>
                <p><strong>Description:</strong> {artPiece.description}</p>
                <span><strong>Created:</strong> {new Date(artPiece.createdAt).toLocaleString()}</span>
                <span><strong>Last Updated:</strong> {new Date(artPiece.updatedAt).toLocaleString()}</span>
            </div>
        </div>
      )}
    </div>
  );
};

export default ViewArtPage;