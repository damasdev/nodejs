const { Router } = require("express");
const router = Router();

const userRoute = require("@routes/user.route");

const routes = [
  {
    path: "/user",
    route: userRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
