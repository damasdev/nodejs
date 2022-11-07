const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  env: process.env.APP_ENV,
  debug: process.env.DEBUG_MODE,
  databaseURL: process.env.DB_URL
};
