class DuplicateRegistrationNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateRegistrationNumberError';
    this.statusCode = 409;
  }
}

module.exports = DuplicateRegistrationNumberError;
