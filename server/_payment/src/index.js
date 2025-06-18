require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const paymentRoutes = require('./p.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Payment Microservice is running');
});

const MONGO_URI = process.env.PAYMENT_MONGO_URI;
const PORT = process.env.PAYMENT_PORT;
const HOST = process.env.HOST;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Payment microservice running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });