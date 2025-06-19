const joi = require('joi');

const userIdSchema = joi.object({
  user_id: joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
});

module.exports = userIdSchema;