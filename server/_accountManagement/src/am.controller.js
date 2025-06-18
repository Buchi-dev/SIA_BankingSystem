const { Business, BusinessUser } = require('./am.model');

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
    const user = new BusinessUser(req.body);
    await user.save();
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