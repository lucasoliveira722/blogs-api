const login = require('./controllers/login');
const { create, findAll, findByPk } = require('./controllers/userController');
const { createCategory, findAllCategories } = require('./controllers/categoryController');

module.exports = {
  login,
  create,
  findAll,
  findByPk,
  createCategory,
  findAllCategories,
};