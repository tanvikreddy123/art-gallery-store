import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post('/api/auth/register', { username, password })
            .then(() => {
                enqueueSnackbar('Registration successful! Please log in.', { variant: 'success' });
                navigate('/login');
            })
            .catch(error => {
                enqueueSnackbar(error.response.data.message || 'Registration failed', { variant: 'error' });
            });
    };

    return (
        <form onSubmit={handleRegister} className='form-container'>
            <h2>Register</h2>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    );
};

export default Register;