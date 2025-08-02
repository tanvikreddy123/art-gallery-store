import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import CreateArtPage from './pages/CreateArtPage';
import EditArtPage from './pages/EditArtPage';
import DeleteArtPage from './pages/DeleteArtPage';
import ViewArtPage from './pages/ViewArtPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/art/create' element={<CreateArtPage />} />
          <Route path='/art/details/:id' element={<ViewArtPage />} />
          <Route path='/art/edit/:id' element={<EditArtPage />} />
          <Route path='/art/delete/:id' element={<DeleteArtPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;