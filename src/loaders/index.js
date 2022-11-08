const express = require("./express");
const mongoose = require("./mongoose");
const logger = require("../helpers/logger");

module.exports = {
  init: async function ({ app, config }) {
    try {
      await mongoose.init(config);
      logger.info("Database initialized successfully");

      await express.init({ app: app });
      logger.info("Express initialized successfully");
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  },
};
