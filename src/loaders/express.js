const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");
const morgan = require("./morgan");

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
      const err = new Error("Not Found");
      err["status"] = 404;
      next(err);
    });

    // Error Handler
    app.use((err, req, res, next) => {
      res.status(err.status || 500).send({
        message: err.message,
      });
    });
  },
};
