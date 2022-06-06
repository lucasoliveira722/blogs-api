const Joi = require('joi');
const { Category } = require('../database/models');

const create = async (newCategory) => {
  const { name } = newCategory;

  // Verificação JOI
  const { error } = Joi.object({ name: Joi.string().required(),
  }).validate({ name });
  if (error) {
    const obj = { status: 400, message: error.message };
    throw obj;
  }

  const createdCategory = await Category.create(newCategory);
  return createdCategory;
};

const findAll = async () => {
  const allUsers = await Category.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

module.exports = {
  create,
  findAll,
};