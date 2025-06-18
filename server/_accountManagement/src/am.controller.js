const { Business, BusinessUser, BankAccount, Role, AuditLog } = require('./am.model');

// Create a new business
exports.createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// List all businesses
exports.listBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a business user
exports.createBusinessUser = async (req, res) => {
  try {
    // Verify role exists
    const role = await Role.findOne({ name: req.body.role });
    if (!role) {
      return res.status(400).json({ error: 'Invalid role specified' });
    }

    // Hash password if provided
    if (req.body.password) {
      const bcrypt = require('bcrypt');
      req.body.password_hash = await bcrypt.hash(req.body.password, 10);
      delete req.body.password;
    }

    const user = new BusinessUser(req.body);
    await user.save();
    
    // Log the audit event
    await exports.logAudit(req.body.business_id, 'CREATE_USER', user._id);
    
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// List users for a business
exports.listBusinessUsers = async (req, res) => {
  try {
    const users = await BusinessUser.find({ business_id: req.query.business_id });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new bank account
exports.createBankAccount = async (req, res) => {
  try {
    const { accountName, accountType, initialBalance } = req.body;
    
    const account = new BankAccount({
      accountName,
      accountType,
      balance: initialBalance,
    });

    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ 
      error: err.message,
      details: err.errors ? Object.values(err.errors).map(e => e.message) : undefined
    });
  }
};

// List all bank accounts
exports.listBankAccounts = async (req, res) => {
  try {
    const accounts = await BankAccount.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new role
exports.createRole = async (req, res) => {
  try {
    const role = new Role(req.body);
    await role.save();
    res.status(201).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// List all roles
exports.listRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Log audit event
exports.logAudit = async (businessId, action, userId) => {
  try {
    const auditLog = new AuditLog({
      business_id: businessId,
      action: action,
      user_id: userId
    });
    await auditLog.save();
    return auditLog;
  } catch (err) {
    console.error('Audit logging failed:', err);
    throw err;
  }
};