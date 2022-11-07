const { userRepository } = require('../repositories');

module.exports = {
    findAll: async () => {
        return userRepository.findAll();
    }
};