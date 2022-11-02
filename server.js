const loaders = require("./src/loaders");
const config = require("./src/config");
const logger = require("./src/loaders/logger");
const express = require("express");

async function start() {
  const server = express();

  await loaders.init({ app: server });

  server
    .listen(config.port, () => {
      logger.info(`Server listening on port: ${config.port}`);
    })
    .on("error", (err) => {
      logger.error(err);
      process.exit(1);
    });
}

start();
