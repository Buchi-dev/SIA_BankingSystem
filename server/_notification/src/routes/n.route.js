const nController = require("../controllers/n.controller.js");
const express = require('express');
const router = express.Router();
const {
  ValidateRequestBodyMiddleware,
  ValidateRequestRouteParameterMiddleware,
  ValidateRequestRouteQueryMiddleware
} = require("../middleware/index.js");

const {
  notificationSchema,
  userIdSchema
} = require("../schema/index.js");

// List notifications for a user
router.get('/', ValidateRequestRouteQueryMiddleware(userIdSchema), nController.listNotifications);
router.post('/', ValidateRequestBodyMiddleware(notificationSchema), nController.createNotification);
// Mark notification as read
router.patch('/read/:user_id', ValidateRequestRouteParameterMiddleware(userIdSchema), nController.markAsRead);

module.exports = router;