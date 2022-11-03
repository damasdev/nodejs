const morgan = require("morgan");
const config = require("../config");
const logger = require("./logger");

morgan.token("message", (req, res) => res.locals.errorMessage || "");

const getIpFormat = () => {
  return config.env === "production" ? ":remote-addr - " : "";
};

const successResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms`;
const errorResponseFormat = `${getIpFormat()}:method :url :status - :response-time ms - message: :message`;

module.exports = {
  successHandler: morgan(successResponseFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: { write: (message) => logger.info(message.trim()) },
  }),
  errorHandler: morgan(errorResponseFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: { write: (message) => logger.error(message.trim()) },
  }),
};
