const mongoose = require('mongoose');
const config = require("../lib/config.js");

exports.ConnectToDb = async () => {
mongoose.connect(config.mongoDb.notificationMongoUri, config.mongoDb.options)
  .then(() => {
    console.log('Connected to MongoDB for Notification service');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
}