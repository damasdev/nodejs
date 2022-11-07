const httpStatus = require("http-status");
const { catchAsync } = require("../api/middlewares/error");
const { userService } = require("../service");

module.exports = {
  index: catchAsync(async (req, res) => {
    const results = await userService.findAll();
    res.status(httpStatus.OK).send(results);
  }),
};
