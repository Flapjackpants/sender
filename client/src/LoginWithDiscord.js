import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LoginWithDiscord = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      // Send the code to your backend
      fetch('http://localhost:5000/api/exchange-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('Token exchange response:', data);
          // Handle access token here (e.g., save it in context or localStorage)
        })
        .catch((err) => {
          console.error('Error exchanging token:', err);
        });
    }
  }, [searchParams]);

  // The login button to redirect user to Discord
  const handleLogin = () => {
    const clientId = '661372100673536013';
    const redirectUri = encodeURIComponent('http://localhost:3000/callback');
    const scope = encodeURIComponent('identify guilds');
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.location.href = discordUrl;
  };

  return (
    <div>
      <h1>Login with Discord</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginWithDiscord;
