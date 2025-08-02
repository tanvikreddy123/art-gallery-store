import React, { useState, useEffect } from 'react';
import api from '../api/axiosConfig';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Spinner from '../components/layout/Spinner';
import ArtForm from '../components/art/ArtForm';

const EditArtPage = () => {
  const [loading, setLoading] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    api.get(`/artpieces/${id}`)
      .then((response) => {
        setInitialData(response.data);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [id]);

  const handleEditArtPiece = (data) => {
    setLoading(true);
    api
      .put(`/artpieces/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Art Piece Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Edit Art Piece</h1>
      {loading ? <Spinner /> : (
        initialData && <ArtForm onSubmit={handleEditArtPiece} initialData={initialData} />
      )}
    </div>
  );
};

export default EditArtPage;