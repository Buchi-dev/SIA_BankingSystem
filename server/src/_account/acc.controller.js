const Account = require('./acc.model');

// Create Account
exports.create = async (req, res) => {
  try {
    const { user_id, balance } = req.body;
    const account = new Account({ user_id, balance });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// View Account
exports.view = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    res.json(account);
  } catch (err) {
    res.status(404).json({ error: 'Account not found' });
  }
};

// Update Account
exports.update = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Account
exports.delete = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
    res.json({ message: 'Account deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Balance Check
exports.balance = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    res.json({ balance: account.balance });
  } catch (err) {
    res.status(404).json({ error: 'Account not found' });
  }
};
