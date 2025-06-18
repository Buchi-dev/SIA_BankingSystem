require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const bRoutes = require('./b.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/billing', bRoutes);
app.get('/', (req, res) => {
  res.send('Billing Microservice is running');
});

const MONGO_URI = process.env.BILLING_MONGO_URI;
const PORT = process.env.BILLING_PORT;
const HOST = process.env.HOST;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Billing microservice running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });