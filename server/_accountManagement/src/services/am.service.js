const { Business, BusinessUser } = require('../models/am.model');
const { BusinessNotFoundError, DuplicateRegistrationNumberError, DuplicateEmailError } = require("../errors/index.js");
class AccountManagementService {
  constructor() {
    this.createBusiness = this.createBusiness.bind(this);
    this.listBusinesses = this.listBusinesses.bind(this);
    this.createBusinessUser = this.createBusinessUser.bind(this);
    this.listBusinessUsers = this.listBusinessUsers.bind(this);
  }

  async createBusiness(businessData) {
    const businesses = await Business.find({
      registration_no: businessData.registration_no
    });
    if (!businesses) throw new DuplicateRegistrationNumberError(`Registration with this number already exists. Registration Number: ${businessData.registration_no}`);

    const newBusiness = new Business(businessData);
    await newBusiness.save();
    return newBusiness;
  }

  async listBusinesses() {

    const businesses = await Business.find();
    return businesses;

  }

  async createBusinessUser(userData) {

    const existingUser = await BusinessUser.findOne({ email: userData.email });
    if (existingUser) throw new DuplicateEmailError(`User with this email already exists: ${userData.email}`);


    const newUser = new BusinessUser(userData);
    await newUser.save();
    return newUser;
  }

  async listBusinessUsers(businessId) {
    const users = await BusinessUser.find({ business_id: businessId });
    if (!users) throw new BusinessNotFoundError("Business not found");

    return users;
  }
}

module.exports = new AccountManagementService();