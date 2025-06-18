const { Account, Transaction } = require('../p.model');

exports.createAccount = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listAccounts = async (req, res) => {
  try {
    const accounts = await Account.find({ business_id: req.query.business_id });
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.transfer = async (req, res) => {
  try {
    const { from_account_id, to_account_id, amount } = req.body;
    const from = await Account.findById(from_account_id);
    const to = await Account.findById(to_account_id);
    if (!from || !to) return res.status(404).json({ error: 'Account not found' });
    if (from.balance < amount) return res.status(400).json({ error: 'Insufficient funds' });
    from.balance -= amount;
    to.balance += amount;
    await from.save();
    await to.save();
    const txn = new Transaction({ from_account_id, to_account_id, amount, status: 'success' });
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransactionHistory = async (req, res) => {
  try {
    const txns = await Transaction.find({ $or: [
      { from_account_id: req.query.account_id },
      { to_account_id: req.query.account_id }
    ] });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};