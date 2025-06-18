const express = require('express');
const amController = require('../controllers/am.controller');
const router = express.Router();
const { ValidateRequestBodyMiddleware, ValidateRequestRouteQueryMiddleware } = require("../middleware/index.js");
const { businessSchema, businessUserSchema, businessUserIdSchema } = require('../schema/am.schema');


// Create a new business
router.post('/business', ValidateRequestBodyMiddleware(businessSchema), amController.createBusiness);

// List all businesses
router.get('/business', amController.listBusinesses);

// Create a business user
router.post('/user', ValidateRequestBodyMiddleware(businessUserSchema), amController.createBusinessUser);

// List users for a business
router.get('/user', ValidateRequestRouteQueryMiddleware(businessUserIdSchema), amController.listBusinessUsers);


module.exports = router;