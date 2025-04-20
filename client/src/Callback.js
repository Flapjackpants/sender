// src/Callback.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Send code to your backend to exchange for token
      axios.post('http://localhost:4000/api/auth/discord', { code })
        .then(res => {
          console.log('Token:', res.data.access_token);
          // Save token, redirect, or do something useful
          navigate('/');
        })
        .catch(err => {
          console.error('OAuth error:', err);
        });
    }
  }, [navigate]);

  return <div>Logging in with Discord...</div>;
};

export default Callback;
