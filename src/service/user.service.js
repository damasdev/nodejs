const { userRepository } = require('../repository');

module.exports = {
    findAll: async () => {
        return userRepository.findAll();
    }
};