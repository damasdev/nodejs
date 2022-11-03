const httpStatus = require("http-status");
const { catchAsync } = require("../api/middlewares/error");
const pick = require("../helpers/pick");

module.exports = {
  index: catchAsync(async (req, res) => {
    const body = pick(req.query, ["id"]);

    res.status(httpStatus.OK).send(body);
  }),
};
