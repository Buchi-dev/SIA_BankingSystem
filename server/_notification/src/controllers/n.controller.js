const NotificationService = require('../services/notification.service');
const { StatusCodes } = require('http-status-codes');
exports.listNotifications = async (req, res) => {
  try {
    const notifications = await NotificationService.getNotifications(req.query.user_id);
    res.status(StatusCodes.OK).json(notifications);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

exports.markAsRead = async (req, res) => {
  try {
    const notification = await NotificationService.markAsRead(req.params.user_id);
    res.status(StatusCodes.OK).json(notification);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const notificationData = req.body;
    const notification = await NotificationService.createNotification(notificationData);
    res.status(StatusCodes.CREATED).json(notification);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }
};