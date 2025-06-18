const akController = require('./ak.controller');
const express = require('express');
const router = express.Router();

// Create API key
router.post('/', akController.createAPIKey);

// List API keys for a business
router.get('/', akController.listAPIKeys);

// Revoke (deactivate) API key
router.patch('/:id/revoke', akController.revokeAPIKey);

module.exports = router;