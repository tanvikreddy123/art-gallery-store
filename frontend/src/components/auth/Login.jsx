import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login', { username, password })
            .then(response => {

                localStorage.setItem('token', response.data.token);

                window.dispatchEvent(new Event('authChange'));
                enqueueSnackbar('Login successful', { variant: 'success' });
                navigate('/');
            })
            .catch(error => {
                enqueueSnackbar(error.response.data.message || 'Login failed', { variant: 'error' });
            });
    };

    return (
        <form onSubmit={handleLogin} className='form-container'>
            <h2>Login</h2>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </form>
    );
};

export default Login;