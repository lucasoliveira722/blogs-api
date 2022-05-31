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

module.exports = {
  create,
};