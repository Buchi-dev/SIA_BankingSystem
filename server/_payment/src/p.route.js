const pController = require('./p.controller');
const express = require('express');
const router = express.Router();

router.post('/account', pController.createAccount);
router.get('/account', pController.listAccounts);
router.post('/transfer', pController.transfer);
router.get('/transactions', pController.getTransactionHistory);

module.exports = router;