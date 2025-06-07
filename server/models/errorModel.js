class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    // this.statusCode = statusCode;
    this.code = errorCode;
  }
}


module.exports = HttpError;