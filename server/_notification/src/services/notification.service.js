const NotificationModel = require('../models/notification.model');

class NotificationService {
  constructor() {
    this.createNotification = this.createNotification.bind(this);
    this.getNotifications = this.getNotifications.bind(this);
    this.markAsRead = this.markAsRead.bind(this);
  }

  async createNotification(notificationData) {
    const notification = new NotificationModel(notificationData);
    return await notification.save();
  }

  async getNotifications(user_id) {
    return await NotificationModel.find({ user_id });
  }

  async markAsRead(user_id) {
    return await NotificationModel.findOneAndUpdate({ user_id }, { is_read: true }, { new: true });
  }
}

module.exports = new NotificationService();
