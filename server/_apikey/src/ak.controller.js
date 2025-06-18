const APIKey = require('./ak.model');

// Create API key
exports.createAPIKey = async (req, res) => {
  try {
    const apiKey = new APIKey(req.body);
    await apiKey.save();
    res.status(201).json(apiKey);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// List API keys for a business
exports.listAPIKeys = async (req, res) => {
  try {
    const keys = await APIKey.find({ business_id: req.query.business_id });
    res.json(keys);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Revoke (deactivate) API key
exports.revokeAPIKey = async (req, res) => {
  try {
    const key = await APIKey.findByIdAndUpdate(req.params.id, { is_active: false }, { new: true });
    res.json(key);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};