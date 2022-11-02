const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  env: process.env.ENV,
};
