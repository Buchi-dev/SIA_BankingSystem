class BusinessNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "BusinessNotFoundError";
  }
}

module.exports = BusinessNotFoundError;
