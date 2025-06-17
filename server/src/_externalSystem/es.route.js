const express = require('express');
const router = express.Router();
const esController = require('./es.controller');

router.post('/register', esController.register);
router.post('/payment', esController.payment);
router.get('/balance-inquiry', esController.balanceInquiry);

module.exports = router;
