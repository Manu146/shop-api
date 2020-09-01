let router = require("express").Router();

router.use("/api", require("./api/products"));
router.use("/api", require("./api/categories"));

module.exports = router;
