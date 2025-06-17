const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes
const userRoutes = require('./_user/usr.route');
const accountRoutes = require('./_account/acc.route');
const transactionRoutes = require('./_transaction/trans.route');
const externalSystemRoutes = require('./_externalSystem/es.route');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/wiredcitybank';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/external-systems', externalSystemRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Wired City Banking System API');
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
