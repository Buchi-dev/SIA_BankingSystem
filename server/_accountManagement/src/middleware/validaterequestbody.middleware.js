const ValidateRequestBodyMiddleware = (requestBody) => {
  return async (req, res, next) => {
    const { error } = requestBody.validate(req.body);
    if (error) {
      return next(error);
    }
    next();
  }
}

module.exports = ValidateRequestBodyMiddleware;
