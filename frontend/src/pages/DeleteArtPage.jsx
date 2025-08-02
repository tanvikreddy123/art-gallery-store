import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Spinner from '../components/layout/Spinner';

const DeleteArtPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteArtPiece = () => {
    setLoading(true);
    api
      .delete(`/artpieces/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Art Piece Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='form-container delete-container'>
      <h1 >Delete Art Piece</h1>
      {loading ? <Spinner /> : ''}
      <h3>Are you sure you want to delete this art piece?</h3>

      <button
        className='btn btn-danger'
        onClick={handleDeleteArtPiece}
      >
        Yes, Delete it
      </button>
    </div>
  )
}

export default DeleteArtPage;