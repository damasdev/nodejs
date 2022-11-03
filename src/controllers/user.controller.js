const httpStatus = require("http-status");
const { catchAsync } = require("../middlewares/error");
const { userService } = require("../services");

module.exports = {
  index: catchAsync(async (req, res) => {
    const results = await userService.findAll();
    res.status(httpStatus.OK).send(results);
  }),
};
