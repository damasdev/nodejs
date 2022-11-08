const expressLoader = require("./express");
const mongooseLoader = require("./mongoose");
const logger = require("../helpers/logger");

module.exports = {
  init: async function ({ app, config }) {
    try {
      await mongooseLoader(config);
      logger.info("Database initialized successfully");

      await expressLoader({ app: app });
      logger.info("Application initialized successfully");
    } catch (err) {
      logger.error(err);
      process.exit(1);
    }
  },
};
