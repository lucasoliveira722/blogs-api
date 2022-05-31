const Joi = require('joi');
const { User } = require('../database/models');

const create = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  const { error } = Joi.object({
    displayName: Joi.string().min(8),
    email: Joi.string().pattern(new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)),
    password: Joi.string().min(6),
    image: Joi.string(),
  }).validate({ displayName, email, password, image });
  if (error) {
    return (error);
  }
  const insertedUser = await User.create(newUser);
  return insertedUser;
};

module.exports = {
  create,
};