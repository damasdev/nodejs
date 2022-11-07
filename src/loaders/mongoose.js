const mongoose = require('mongoose');

module.exports = {
    init: async (config) => {
        return mongoose.connect(config.databaseURL, {
            connectTimeoutMS: 5000,
            serverSelectionTimeoutMS: 3000
        });
    },
};