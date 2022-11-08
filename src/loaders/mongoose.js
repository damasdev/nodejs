const mongoose = require("mongoose");

module.exports = {
  init: async (config) => {
    const connection = mongoose.connect(config.databaseURL, {
      connectTimeoutMS: 2000, // Connection timeout after 2 seconds
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 30000, // Close sockets after 30 seconds of inactivity
    });

    return connection.db;
  },
};
