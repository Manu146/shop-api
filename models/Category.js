const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");
const Product = require("./Product");

const Category = db.define(
  "category",
  {
    name: DataTypes.STRING(20),
  },
  {
    timestamps: false,
  }
);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = Category;
