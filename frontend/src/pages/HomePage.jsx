import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';
import Spinner from '../components/layout/Spinner';
import ArtCard from '../components/art/ArtCard';

const HomePage = () => {
  const [artPieces, setArtPieces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get('/artpieces')
      .then((response) => {
        setArtPieces(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '2rem 0' }}>Gallery Collection</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='art-list'>
          {artPieces.map((item) => (
            <ArtCard key={item._id} artPiece={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;