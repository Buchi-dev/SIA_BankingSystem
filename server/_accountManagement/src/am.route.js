const express = require('express');
const amController = require('./am.controller');
const router = express.Router();

// Create a new business
router.post('/business', amController.createBusiness);

// List all businesses
router.get('/business', amController.listBusinesses);

// Create a business user
router.post('/user', amController.createBusinessUser);

// List users for a business
router.get('/user', amController.listBusinessUsers);

module.exports = router;