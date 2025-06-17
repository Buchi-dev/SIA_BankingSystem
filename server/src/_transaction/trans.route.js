const express = require('express');
const router = express.Router();
const transactionController = require('./trans.controller');

router.post('/deposit', transactionController.deposit);
router.post('/withdraw', transactionController.withdraw);
router.post('/transfer', transactionController.transfer);
router.get('/history', transactionController.history);

module.exports = router;
