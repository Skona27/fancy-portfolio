const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

module.exports = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  SERVER_HOST: process.env.SERVER_HOST || ""
};
