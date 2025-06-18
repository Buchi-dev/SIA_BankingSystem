require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const akRoutes = require('./ak.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/apikey', akRoutes);

app.get('/', (req, res) => {
  res.send('API Key Microservice is running');
});

const MONGO_URI = process.env.APIKEY_MONGO_URI;
const PORT = process.env.APIKEY_PORT;
const HOST = process.env.HOST;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`API Key microservice running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });