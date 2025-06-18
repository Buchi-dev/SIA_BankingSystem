const joi = require('joi');

const businessSchema = joi.object({
  name: joi.string().min(2).max(100).required(),
  registration_no: joi.string().min(5).max(50).required(),
  industry: joi.string().min(2).max(50).optional(),
  status: joi.string().valid('active', 'inactive').default('active'),
});

const businessUserSchema = joi.object({
  email: joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net', 'org', 'edu'] }
  }).required(),
  role: joi.string().valid('admin', 'user').required(),
  business_id: joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
  password_hash: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
});

const roleSchema = joi.object({
  name: joi.string().min(2).max(50).required(),
  permissions: joi.array().items(joi.string()).required(),
});
const auditLogSchema = joi.object({
  business_id: joi.string().required(),
  action: joi.string().min(2).max(100).required(),
  user_id: joi.string().optional(),
  timestamp: joi.date().default(() => new Date()),
});

const businessUserIdSchema = joi.object({
  business_id: joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
});
module.exports = {
  businessSchema,
  businessUserSchema,
  roleSchema,
  auditLogSchema,
  businessUserIdSchema
};
