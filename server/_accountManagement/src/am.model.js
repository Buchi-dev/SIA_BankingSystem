const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registration_no: { type: String, required: true },
  industry: { type: String },
  status: { type: String, default: 'active' }
});

const BusinessUserSchema = new mongoose.Schema({
  business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password_hash: { type: String, required: true }
});

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [{ type: String }]
});

const AuditLogSchema = new mongoose.Schema({
  business_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true },
  action: { type: String, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'BusinessUser' },
  timestamp: { type: Date, default: Date.now }
});

const BankAccountSchema = new mongoose.Schema({
  accountName: { 
    type: String, 
    required: [true, 'Account name is required'] 
  },
  accountType: { 
    type: String, 
    required: [true, 'Account type is required'],
    enum: ['savings', 'checking', 'business']
  },
  balance: { 
    type: Number, 
    required: [true, 'Initial balance is required'],
    min: [0, 'Balance must be positive']
  },
  status: { 
    type: String, 
    default: 'active',
    enum: ['active', 'inactive', 'frozen']
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = {
  Business: mongoose.model('Business', BusinessSchema),
  BusinessUser: mongoose.model('BusinessUser', BusinessUserSchema),
  Role: mongoose.model('Role', RoleSchema),
  AuditLog: mongoose.model('AuditLog', AuditLogSchema),
  BankAccount: mongoose.model('BankAccount', BankAccountSchema)
};