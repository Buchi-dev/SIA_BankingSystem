require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const amRoutes = require('./am.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/account-management', amRoutes);

app.get('/', (req, res) => {
  res.send('Account Management Microservice is running');
});

const MONGO_URI = process.env.ACCOUNT_MANAGEMENT_MONGO_URI;
const PORT = process.env.ACCOUNT_MANAGEMENT_PORT;
const HOST = process.env.HOST;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Account Management microservice running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });