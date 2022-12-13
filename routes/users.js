const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send([{ name: "moe" }, { name: "kevin" }, { name: "milo" }]);
});

module.exports = router;
