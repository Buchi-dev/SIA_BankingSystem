const Transaction = require('./trans.model');
const Account = require('../_account/acc.model');

// Deposit
exports.deposit = async (req, res) => {
  try {
    const { to_account_id, amount } = req.body;
    const account = await Account.findById(to_account_id);
    if (!account) return res.status(404).json({ error: 'Account not found' });
    account.balance += amount;
    await account.save();
    const transaction = new Transaction({ from_account_id: to_account_id, to_account_id, amount, type: 'deposit', status: 'completed' });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Withdraw
exports.withdraw = async (req, res) => {
  try {
    const { from_account_id, amount } = req.body;
    const account = await Account.findById(from_account_id);
    if (!account || account.balance < amount) return res.status(400).json({ error: 'Insufficient funds' });
    account.balance -= amount;
    await account.save();
    const transaction = new Transaction({ from_account_id, to_account_id: from_account_id, amount, type: 'withdrawal', status: 'completed' });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Transfer
exports.transfer = async (req, res) => {
  try {
    const { from_account_id, to_account_id, amount } = req.body;
    const fromAccount = await Account.findById(from_account_id);
    const toAccount = await Account.findById(to_account_id);
    if (!fromAccount || !toAccount || fromAccount.balance < amount) return res.status(400).json({ error: 'Invalid accounts or insufficient funds' });
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    await fromAccount.save();
    await toAccount.save();
    const transaction = new Transaction({ from_account_id, to_account_id, amount, type: 'transfer', status: 'completed' });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Transaction History
exports.history = async (req, res) => {
  try {
    const { account_id } = req.query;
    const transactions = await Transaction.find({ $or: [ { from_account_id: account_id }, { to_account_id: account_id } ] }).sort({ timestamp: -1 });
    res.json(transactions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
