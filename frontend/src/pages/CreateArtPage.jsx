import React from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import ArtForm from '../components/art/ArtForm';

const CreateArtPage = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveArtPiece = (data) => {
    api
      .post('/artpieces', data)
      .then(() => {
        enqueueSnackbar('Art Piece Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Add New Art Piece</h1>
      <ArtForm onSubmit={handleSaveArtPiece} />
    </div>
  );
};

export default CreateArtPage;