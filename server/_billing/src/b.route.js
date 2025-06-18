const bController = require('./b.controller');
const express = require('express');
const router = express.Router();

router.post('/invoice', bController.createInvoice);
router.get('/invoice', bController.listInvoices);
router.post('/invoice/:id/item', bController.addInvoiceItem);
router.post('/invoice/:id/pay', bController.payInvoice);

module.exports = router;