const login = require('./controllers/login');
const { create, findAll } = require('./controllers/userController');

module.exports = {
  login,
  create,
  findAll,
};