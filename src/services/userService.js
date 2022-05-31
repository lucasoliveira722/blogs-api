const Joi = require('joi');
const { User } = require('../database/models');

const create = async (newUser) => {
  const { displayName, email, password, image } = newUser;

  // Verificação JOI
  const { error } = Joi.object({ displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
  }).validate({ displayName, email, password, image });
  if (error) {
    const obj = { status: 400, message: error.message };
    throw obj;
  }

  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (user) {
    const errorAlreadyExists = { status: 409, message: 'User already registered' };
    throw errorAlreadyExists;
  }
  const insertedUser = await User.create(newUser);
  return insertedUser;
};

module.exports = {
  create,
};