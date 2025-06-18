require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const paymentRoutes = require('./p.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/payment', paymentRoutes);

const MONGO_URI = process.env.PAYMENT_MONGO_URI;
if (!MONGO_URI) {
  console.error('MongoDB URI not set in environment variables.');
  process.exit(1);
}

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(() => {
      console.log('Payment microservice running');
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });