/**
 * p.route.js - Payment Service API Routes
 *
 * This file defines the Express routes for the payment service, including account management and transaction operations.
 *
 * Routes:
 *   POST   /account        - Create a new payment account
 *   GET    /account        - List all payment accounts
 *   POST   /transfer       - Transfer funds between accounts
 *   GET    /transactions   - Get transaction history
 *
 * Each route delegates to the corresponding controller method in p.controller.js.
 *
 * Author: [Your Name]
 * Date: [YYYY-MM-DD]
 */

const pController = require('./p.controller');
const express = require('express');
const router = express.Router();

// Create a new payment account
// POST http://localhost:<port>/api/payment/account
// Body (JSON):
// {
//   "business_id": "<business_id>",
//   "account_number": "1234567890",
//   "type": "savings",
//   "balance": 1000
// }
router.post('/account', pController.createAccount);

// List all payment accounts
// GET http://localhost:<port>/api/payment/account?business_id=<business_id>
router.get('/account', pController.listAccounts);

// Transfer funds between accounts
// POST http://localhost:<port>/api/payment/transfer
// Body (JSON):
// {
//   "from_account_number": "1234567890",
//   "to_account_number": "9876543210",
//   "amount": 200
// }
router.post('/transfer', pController.transfer);

// Get transaction history
// GET http://localhost:<port>/api/payment/transactions?account_number=<account_number>
router.get('/transactions', pController.getTransactionHistory);

module.exports = router;