const ValidateRequestBodyMiddleware = require("./validaterequestbody.middleware");
const ValidateRequestRouteParameterMiddleware = require("./validaterequestrouteparameter.middleware");
const ValidateRequestRouteQueryMiddleware = require("./validaterequestroutequery.middleware");

module.exports = {
  ValidateRequestBodyMiddleware,
  ValidateRequestRouteParameterMiddleware,
  ValidateRequestRouteQueryMiddleware
};