require('dotenv').config();
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/news', async (req, res) => {
    const { q = 'soccer', page = 1, pageSize = 50 } = req.query;
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q,
          language: 'en',
          page,
          pageSize,
          apiKey: process.env.REACT_NEWS_API,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Error fetching news' });
    }
  });
  
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
