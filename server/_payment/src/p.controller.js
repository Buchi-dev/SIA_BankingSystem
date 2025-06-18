const { Account, Transaction } = require('./p.model');

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
    const { from_account_number, to_account_number, amount } = req.body;
    if (!from_account_number || !to_account_number) {
      return res.status(400).json({ error: 'Provide both from_account_number and to_account_number.' });
    }
    const from = await Account.findOne({ account_number: from_account_number });
    const to = await Account.findOne({ account_number: to_account_number });
    if (!from || !to) return res.status(404).json({ error: 'Account not found' });
    if (from.balance < amount) return res.status(400).json({ error: 'Insufficient funds' });
    from.balance -= amount;
    to.balance += amount;
    await from.save();
    await to.save();
    const txn = new Transaction({
      from_account_id: from._id,
      to_account_id: to._id,
      amount,
      status: 'success'
    });
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransactionHistory = async (req, res) => {
  try {
    const { account_number } = req.query;
    if (!account_number) {
      return res.status(400).json({ error: 'Provide account_number as a query parameter.' });
    }
    const account = await Account.findOne({ account_number });
    if (!account) return res.status(404).json({ error: 'Account not found' });
    const txns = await Transaction.find({ $or: [
      { from_account_id: account._id },
      { to_account_id: account._id }
    ] });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};