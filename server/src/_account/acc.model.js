const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ['active', 'inactive', 'closed'], default: 'active' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Account', accountSchema);