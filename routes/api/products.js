let router = require("express").Router();
const ProductController = require("../../controllers/ProductController");
const Product = require("../../models/Product");

router.post("/product/", ProductController.createProduct); //ProductController.createProduct);

router.get("/products", ProductController.getAllProducts);

router.get("/product/:id", ProductController.getProduct);

router.put("/product/:id", ProductController.updateProduct);

module.exports = router;
