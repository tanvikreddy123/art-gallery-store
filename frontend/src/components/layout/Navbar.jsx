import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logout } from '../../services/authService';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const navigate = useNavigate();

  // This effect hook sets up event listeners to keep the navbar's login state
  // synchronized. It listens for storage changes (for other tabs) and a custom
  // 'authChange' event (for the current tab) to provide a seamless UX.
  useEffect(() => {
    const handleStorageChange = () => {
      setLoggedIn(isLoggedIn());
    };

    window.addEventListener('storage', handleStorageChange);

    
    window.addEventListener('authChange', handleStorageChange);

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authChange', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    logout(); 
    setLoggedIn(false); 
    navigate('/login'); 
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        Art Gallery Store
      </Link>
      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        {/* The 'Add Art' link is only shown to authenticated users */}
        {loggedIn && <Link to='/art/create'>Add Art</Link>}

        {loggedIn ? (
          <>
            <a href="#!" onClick={handleLogout} style={{cursor: 'pointer'}}>Logout</a>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;