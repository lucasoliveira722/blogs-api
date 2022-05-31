const { User } = require('../database/models');

const checksIfExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = checksIfExists;