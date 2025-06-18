// require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const amRoutes = require('./routes/am.route');
const cors = require('cors');
const { ConnectToDb } = require('./db/index');
const config = require('./lib/config');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/account-management', amRoutes);

app.get('/', (req, res) => {
  res.send('Account Management Microservice is running');
});

ConnectToDb();

app.listen(config.accountManagementPort, () => {
  console.log(`Account Management Microservice is listening on http://localhost:${config.accountManagementPort}`);
});
