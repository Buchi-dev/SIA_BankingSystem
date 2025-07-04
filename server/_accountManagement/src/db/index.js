const mongoose = require('mongoose');
const config = require("../lib/config");

exports.ConnectToDb = async () => {
  mongoose.connect(config.mongoDb.accountManagementMongoUri, config.mongoDb.options)
    .then(() => {
      console.log('MongoDB connection established successfully');
    
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
}