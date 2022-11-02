const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "User Route" });
});

module.exports = router;
