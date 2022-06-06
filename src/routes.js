const login = require('./controllers/login');
const { create, findAll, findByPk } = require('./controllers/userController');

module.exports = {
  login,
  create,
  findAll,
  findByPk,
};