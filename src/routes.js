const login = require('./controllers/login');
const { create, findAll, findByPk } = require('./controllers/userController');
const { createCategory, findAllCategories } = require('./controllers/categoryController');
const { findAllPost } = require('./controllers/postController');

module.exports = {
  login,
  create,
  findAll,
  findByPk,
  createCategory,
  findAllCategories,
  findAllPost,
};