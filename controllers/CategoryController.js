const Category = require("../models/Category");
const Product = require("../models/Product");

const createCategory = async (req, res) => {
  const newCategory = await Category.create({ ...req.body });
  res.send(newCategory);
};

const getAllCategories = async (req, res) => {
  const categories = await Category.findAll({ include: Product });
  res.send(categories);
};

const getCategory = async (req, res) => {
  const category = await Category.findOne({
    where: {
      id: req.params.id,
    },
    include: Product,
  });
  res.send(category);
};

module.exports = { getAllCategories, getCategory, createCategory };
