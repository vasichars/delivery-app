import ApiError from '../errors/ApiError.js';
import logger from '../startup/logger.js';

export default function (err, req, res, next) {
  logger.error(err.stack || err.message);

  if (err instanceof ApiError) {
    res.status(err.code).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: 'Something went wrong!' });
}