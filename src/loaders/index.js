const expressLoader = require("@loaders/express");
const mongooseLoader = require("@loaders/mongoose");
const logger = require("@utils/logger");

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
