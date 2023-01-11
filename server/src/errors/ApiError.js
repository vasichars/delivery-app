class ApiError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.name = 'ApiError';
  }

  static badRequest(msg) {
    throw new ApiError(400, msg);
  }

  static notFound(msg) {
    throw new ApiError(404, msg);
  }

  static internal(msg) {
    throw new ApiError(500, msg);
  }
}

export default ApiError;