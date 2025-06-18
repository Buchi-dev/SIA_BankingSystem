const mongoose = require('mongoose');

const APIKeySchema = new mongoose.Schema({
  business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  key: { type: String, required: true, unique: true },
  label: { type: String },
  scopes: { type: [String] },
  is_active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  expires_at: { type: Date }
});

module.exports = mongoose.model('APIKey', APIKeySchema);