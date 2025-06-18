const ValidateRequestRouteQueryMiddleware = (schema) => {
  return (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.query);

      if (error) {
        return next(error);
      }

      req.validatedQuery = value;
      next();
    } catch (error) {
      return next(error);
    }
  };
};



module.exports = ValidateRequestRouteQueryMiddleware;