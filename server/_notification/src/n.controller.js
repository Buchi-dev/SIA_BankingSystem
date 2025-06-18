const Notification = require('../n.model');

exports.listNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user_id: req.query.user_id });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(req.params.id, { is_read: true }, { new: true });
    res.json(notification);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};