const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({
  path: envFile
});

module.exports = {
  notificationPort: process.env.NOTIFICATION_PORT || 4001,
  host: process.env.HOST || 'localhost',

  mongoDb: {
    notificationMongoUri: process.env.NOTIFICATION_MONGO_URI || 'mongodb://localhost:27017/NOTIFICATION',
    options: {
      minPoolSize: Number(process.env.NOTIFICATION_DB_MINIMUMPOOLSIZE || 5),
      maxPoolSize: Number(process.env.NOTIFICATION_DB_MAXIMUMPOOLSIZE || 30),
      serverSelectionTimeoutMS: process.env.NOTIFICATION_DB_SERVERSELECTIONTIMEOUTMILLISECONDS,
      socketTimeoutMS: process.env.NOTIFICATION_DB_SOCKETTIMEOUTMILLISECONDS,
    }
  }
}