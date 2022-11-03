const express = require("./express");
const logger = require("../helpers/logger");

module.exports = {
  init: async function ({ app }) {
    await express.init({ app: app });

    logger.info("App initialized successfully");
  },
};
