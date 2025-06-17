const express = require('express');
const router = express.Router();
const accountController = require('./acc.controller');

router.post('/create', accountController.create);
router.get('/view/:id', accountController.view);
router.put('/update/:id', accountController.update);
router.delete('/delete/:id', accountController.delete);
router.get('/balance/:id', accountController.balance);

module.exports = router;
