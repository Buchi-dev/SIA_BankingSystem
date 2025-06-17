const mongoose = require('mongoose');

const externalSystemSchema = new mongoose.Schema({
  system_name: { type: String, required: true, unique: true },
  api_key: { type: String, required: true },
  contact: { type: String },
  registered_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ExternalSystem', externalSystemSchema);