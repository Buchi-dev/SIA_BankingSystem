const nController = require('./n.controller');
const express = require('express');
const router = express.Router();

// List notifications for a user
router.get('/', nController.listNotifications);

// Mark notification as read
router.patch('/:id/read', nController.markAsRead);

module.exports = router;