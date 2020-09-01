const { Sequelize } = require("sequelize");

module.exports = new Sequelize("shopDb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
