const { Business, BusinessUser } = require('../models/am.model');
const { StatusCodes } = require("http-status-codes");
const AccountManagementService = require('../services/am.service');



// Create a new business
exports.createBusiness = async (req, res) => {
  try {
    const businessData = req.body;
    const newBusiness = await AccountManagementService.createBusiness(businessData);

    res.status(StatusCodes.CREATED).json(newBusiness);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });

  }
};

// List all businesses
exports.listBusinesses = async (req, res) => {
  try {
    const businesses = await AccountManagementService.listBusinesses();
    res.status(StatusCodes.OK).json(businesses);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};

// Create a business user
exports.createBusinessUser = async (req, res) => {
  try {
    const user = await AccountManagementService.createBusinessUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
  }
};

// List users for a business
exports.listBusinessUsers = async (req, res) => {
  try {
    const users = await AccountManagementService.listBusinessUsers(req.query.business_id);
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
  }
};