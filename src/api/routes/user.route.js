const { Router } = require("express");
const router = Router();

const validate = require("./../middlewares/validate");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");

router.get("/", validate(userValidation.index), userController.index);

module.exports = router;
