const ExternalSystem = require('./es.model');

// Registration
exports.register = async (req, res) => {
  try {
    const { system_name, api_key, contact } = req.body;
    const system = new ExternalSystem({ system_name, api_key, contact });
    await system.save();
    res.status(201).json({ message: 'External system registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Payment
exports.payment = async (req, res) => {
  try {
    // Payment logic placeholder
    res.json({ message: 'Payment processed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Balance Inquiry
exports.balanceInquiry = async (req, res) => {
  try {
    // Balance inquiry logic placeholder
    res.json({ message: 'Balance inquiry successful' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
