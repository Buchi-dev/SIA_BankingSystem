const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  account_number: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  balance: { type: Number, default: 0 }
});

const TransactionSchema = new mongoose.Schema({
  from_account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  to_account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const TransferRequestSchema = new mongoose.Schema({
  initiator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessUser', required: true },
  from_account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  to_account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  approved_by: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessUser' },
  status: { type: String, required: true }
});

const StatementSchema = new mongoose.Schema({
  account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  period_start: { type: Date, required: true },
  period_end: { type: Date, required: true },
  pdf_url: { type: String }
});

module.exports = {
  Account: mongoose.model('Account', AccountSchema),
  Transaction: mongoose.model('Transaction', TransactionSchema),
  TransferRequest: mongoose.model('TransferRequest', TransferRequestSchema),
  Statement: mongoose.model('Statement', StatementSchema)
};