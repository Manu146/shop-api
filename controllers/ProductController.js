const Product = require("../models/Product");
const Category = require("../models/Category");

const createProduct = async (req, res) => {
  const newProduct = await Product.create({ ...req.body });
  res.send(newProduct);
};

const getAllProducts = async (req, res) => {
  const products = await Product.findAll({
    attributes: { exclude: ["categoryId"] },
    include: Category,
  });
  res.send(products);
};

const getProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["categoryId"] },
    include: Category,
  });
  res.send(product);
};

const updateProduct = async (req, res) => {
  const product = await Product.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.send(product);
};

module.exports = { getAllProducts, getProduct, createProduct, updateProduct };
