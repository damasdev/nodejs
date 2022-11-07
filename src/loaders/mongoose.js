const mongoose = require('mongoose');
const config = require('../config');

module.exports = {
    init: async () => {
        return mongoose.connect(config.databaseURL, {
            connectTimeoutMS: 5000,
            serverSelectionTimeoutMS: 3000
        });
    },
};