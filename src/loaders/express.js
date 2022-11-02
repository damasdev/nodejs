const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");

const routes = require("../api");

module.exports = {
  init: async function ({ app }) {
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

    // set root endpoint
    app.get("/", (req, res) => {
      res.json({ message: "Welcome" });
    });

    // register all routes
    app.use("/", routes);

    // send back a 404 error for any unknown api request
    app.use((req, res, next) => {
      next(new Error("not found"));
    });
  },
};
