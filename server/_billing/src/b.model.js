const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  sender_business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  receiver_business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  due_date: { type: Date, required: true },
  status: { type: String, required: true }
});

const InvoiceItemSchema = new mongoose.Schema({
  invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit_price: { type: Number, required: true }
});

const PaymentSchema = new mongoose.Schema({
  invoice_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
  payer_account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const TaxRuleSchema = new mongoose.Schema({
  region: { type: String, required: true },
  rate: { type: Number, required: true },
  description: { type: String }
});

module.exports = {
  Invoice: mongoose.model('Invoice', InvoiceSchema),
  InvoiceItem: mongoose.model('InvoiceItem', InvoiceItemSchema),
  Payment: mongoose.model('Payment', PaymentSchema),
  TaxRule: mongoose.model('TaxRule', TaxRuleSchema)
};