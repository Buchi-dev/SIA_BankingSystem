// require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const express = require('express');
const nRoutes = require("./routes/n.route.js");
const cors = require('cors');
const { ConnectToDb } = require('./db/index.js');
const config = require('./lib/config.js');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/notification', nRoutes);

app.get('/', (req, res) => {
  res.send('Notification Microservice is running');
});



ConnectToDb();

app.listen(config.notificationPort, () => {
  console.log(`Notification Microservice is listening on http://localhost:${config.notificationPort}`);
});