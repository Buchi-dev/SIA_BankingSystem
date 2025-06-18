class DuplicateEmailError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DuplicateEmailError';
    this.statusCode = 409;
  }
}

module.exports = DuplicateEmailError;
