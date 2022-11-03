const httpStatus = require("http-status");
const config = require("../../config");
const logger = require("../../helpers/logger");
const { ApiError } = require("../../helpers/error");

module.exports = {
  errorConverter: (err, req, res, next) => {
    let error = err;

    if (!(error instanceof ApiError)) {
      let statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
      let message = error.message || httpStatus[statusCode];

      if (config.env === "production") {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
      }

      error = new ApiError(statusCode, message, err.stack);
    }

    res.locals.errorMessage = error.message;

    next(error);
  },
  errorHandler: (err, req, res, next) => {
    let { statusCode, message } = err;

    const response = {
      message,
      ...(config.env === "development" && { stack: err.stack }),
    };

    if (config.env === "development") {
      logger.error(err.stack);
    }

    res.status(statusCode).send(response);
  },
};
