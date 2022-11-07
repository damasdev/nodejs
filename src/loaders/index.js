const express = require("./express");
const mongoose = require("./mongoose");
const logger = require("../helpers/logger");

module.exports = {
  init: async function ({ app }) {
    mongoose.init().catch(err => {
      logger.error(err);
    });

    await express.init({ app: app });

    logger.info("App initialized successfully");
  },
};
