const ValidateRequestRouteParameterMiddleware = (requestBody) => {
  return async (req, res, next) => {
    try {
      const { error, value } = requestBody.validate(req.params);
      
      if (error) {
        return next(error);
      }

      req.validatedParams = value;
      next();
    } catch (err) {
      return next(err);
    }
  };
};

module.exports = ValidateRequestRouteParameterMiddleware;
