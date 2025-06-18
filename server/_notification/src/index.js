require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const mongoose = require('mongoose');
const nRoutes = require('./n.route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/notification', nRoutes);

app.get('/', (req, res) => {
  res.send('Notification Microservice is running');
});

const MONGO_URI = process.env.NOTIFICATION_MONGO_URI;
const PORT = process.env.NOTIFICATION_PORT;
const HOST = process.env.HOST;

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, HOST, () => {
      console.log(`Notification microservice running on http://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });