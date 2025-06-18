const ValidateRequestRouteQueryMiddleware = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query);

    if (error) return next(error);

    req.validatedQuery = value;
    next();
  };
};

module.exports = ValidateRequestRouteQueryMiddleware;