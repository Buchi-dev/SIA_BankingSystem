const express = require('express');
const amController = require('./am.controller');
const router = express.Router();

// Bank Account routes
router.post('/accounts', amController.createBankAccount);
router.get('/accounts', amController.listBankAccounts);

// Business routes
router.post('/business', amController.createBusiness);
router.get('/business', amController.listBusinesses);

// Create a business user
router.post('/user', amController.createBusinessUser);

// List users for a business
router.get('/user', amController.listBusinessUsers);

// Role management routes
router.post('/roles', amController.createRole);
router.get('/roles', amController.listRoles);

module.exports = router;