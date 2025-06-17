const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  from_account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  to_account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['deposit', 'withdrawal', 'transfer'], required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

module.exports = mongoose.model('Transaction', transactionSchema);