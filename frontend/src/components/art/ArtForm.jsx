import React, { useState, useEffect } from 'react';

const ArtForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  
  useEffect(() => {
    if (initialData && initialData._id) {
      setTitle(initialData.title || '');
      setArtist(initialData.artist || '');
      setDescription(initialData.description || '');
      setYear(initialData.year ?? '');
      setPrice(initialData.price ?? '');
      setImageUrl(initialData.imageUrl || '');
    }
  }, [initialData]);

  // quick check to avoid non-direct image urls (drive/viewer links etc.)
  const isDirectImageUrl = (url = '') =>
    /^\/images\/.+\.(png|jpg|jpeg|gif|webp|avif)$/i.test(url) ||
    /^https?:\/\/.+\.(png|jpg|jpeg|gif|webp|avif)(\?.*)?$/i.test(url);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDirectImageUrl(imageUrl)) {
      alert('please use a direct image url ending in .jpg/.png (or a file under /images)');
      return;
    }

    const artPieceData = {
      title: title.trim(),
      artist: artist.trim(),
      description: description.trim(),
      year: Number(year),
      price: Number(price),
      imageUrl: imageUrl.trim(),
    };

    onSubmit(artPieceData);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className='form-group'>
        <label>Title</label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className='form-group'>
        <label>Artist</label>
        <input type='text' value={artist} onChange={(e) => setArtist(e.target.value)} required />
      </div>

      <div className='form-group'>
        <label>Year</label>
        <input type='number' value={year} onChange={(e) => setYear(e.target.value)} required />
      </div>

      <div className='form-group'>
        <label>Price ($)</label>
        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>

      <div className='form-group'>
        <label>Image URL</label>
        <input
          type='text'
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder='https://.../image.jpg or /images/monalisa.jpg'
          required
        />
      </div>

      <div className='form-group'>
        <label>Description</label>
        <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <button type='submit' className='btn btn-primary'>
        Save Art Piece
      </button>
    </form>
  );
};

export default ArtForm;
