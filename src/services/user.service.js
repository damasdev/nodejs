const { userModel } = require('../models');

module.exports = {
    findAll: async () => {
        return await userModel.findAll();
    }
};