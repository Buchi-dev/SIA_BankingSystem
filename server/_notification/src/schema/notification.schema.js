const joi = require('joi');

const notificationSchema = joi.object({
  user_id: joi.string().required(),
  type: joi.string().valid('info', 'warning', 'error').required(),
  message: joi.string().required(),
  is_read: joi.boolean().default(false),
  createdAt: joi.date().default(() => new Date()),
});

module.exports = notificationSchema;