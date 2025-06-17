const User = require('./usr.model');
const bcrypt = require('bcrypt');

// Registration
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const password_hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password_hash, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Authentication
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    // Token generation placeholder
    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Profile management
exports.profile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password_hash');
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
