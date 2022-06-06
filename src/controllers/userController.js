const userService = require('../services/userService');
const createToken = require('../helpers/createToken');

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  try {
    const newUser = await userService.create({ displayName, email, password, image });
    const token = createToken({ newUser });
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const findAll = async (_req, res, next) => {
  try {
    const allUsers = await userService.findAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
};

const findByPk = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userService.findByPk(id);
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  findAll,
  findByPk,
};