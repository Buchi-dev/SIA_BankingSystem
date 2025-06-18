const dotenv = require('dotenv');
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({
  path: envFile
});

module.exports = {
  accountManagementPort: process.env.ACCOUNT_MANAGEMENT_PORT || 4001,
  host: process.env.HOST || 'localhost',

  mongoDb: {
    accountManagementMongoUri: process.env.ACCOUNT_MANAGEMENT_MONGO_URI || 'mongodb://localhost:27017/account_management',
    options: {
      minPoolSize: Number(process.env.ACCOUNT_MANAGEMENT_DB_MINIMUMPOOLSIZE || 5),
      maxPoolSize: Number(process.env.ACCOUNT_MANAGEMENT_DB_MAXIMUMPOOLSIZE || 30),
      serverSelectionTimeoutMS: process.env.ACCOUNT_MANAGEMENT_DB_SERVERSELECTIONTIMEOUTMILLISECONDS,
      socketTimeoutMS: process.env.ACCOUNT_MANAGEMENT_DB_SOCKETTIMEOUTMILLISECONDS,
    }
  }
}