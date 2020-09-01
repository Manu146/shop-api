let router = require("express").Router();
const CategoryController = require("../../controllers/CategoryController");

router.get("/categories", CategoryController.getAllCategories);

router.get("/category/:id", CategoryController.getCategory);

module.exports = router;
