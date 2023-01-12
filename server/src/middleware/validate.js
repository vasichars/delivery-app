import ApiError from '../errors/ApiError.js';

export default (validate) => {
  return (req, res, next) => {
    if (!validate.params(req.params)) ApiError.badRequest(JSON.stringify(validate.params.errors));
    if (!validate.query(req.query)) ApiError.badRequest(JSON.stringify(validate.query.errors));
    if (!validate.body(req.body)) ApiError.badRequest(JSON.stringify(validate.body.errors));
    next();
  };
};