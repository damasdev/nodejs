const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  env: process.env.APP_ENV,
  debug: process.env.DEBUG_MODE,
  databaseURL: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};
