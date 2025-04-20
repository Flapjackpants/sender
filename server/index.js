const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example endpoint
app.post('/api/exchange-token', async (req, res) => {
  const { code } = req.body;
  // Here, exchange the OAuth code for an access token from Discord.
  res.json({ message: 'Received code', code });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
