const Joi = require("joi");

module.exports = {
  index: {
    query: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
};
