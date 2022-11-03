const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");

const morgan = require("../helpers/morgan");
const { ApiError } = require("../helpers/error");
const { errorConverter, errorHandler } = require("../api/middlewares/error");

const routes = require("../api");

module.exports = {
  init: async function ({ app }) {
    app.disable("etag");

    // set security HTTP headers
    app.use(helmet());

    // sanitize request data
    app.use(xss());

    // gzip compression
    app.use(compression());

    // parse json request body
    app.use(express.json({ limit: "5mb" }));

    // parse urlencoded request body
    app.use(
      express.urlencoded({
        extended: true,
        limit: "5mb",
        type: "application/x-www-form-urlencoded",
      })
    );

    // enable cors
    app.use(cors());
    app.options("*", cors());

    // http request logger
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);

    // set root endpoint
    app.get("/", (req, res) => {
      res.status(200).send({ message: "Welcome" });
    });

    // register all routes
    app.use("/", routes);

    // send back a 404 error for any unknown api request
    app.use((req, res, next) => {
      next(new ApiError(httpStatus.NOT_FOUND, "Not Found"));
    });

    // convert error to ApiError, if needed
    app.use(errorConverter);

    // handle error
    app.use(errorHandler);
  },
};
