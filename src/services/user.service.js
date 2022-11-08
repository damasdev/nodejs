const { userRepository } = require("@repositories");

module.exports = {
  findAll: async () => {
    const result = await userRepository.findAll();

    return {
      message: "OK",
      data: result,
    };
  },
};
