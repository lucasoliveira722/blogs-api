require('dotenv').config();
const jwt = require('jsonwebtoken');
// const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

// const validateBody = (body, res) => {
//   const { email, password } = body;

//   if (!email || !password) {
//     res.status(400).json({ message: 'Some required fields are missing' });
//     return false;
//   }
//   return true;
// };

const createToken = (payload) => {
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
};

module.exports = createToken;
// module.exports = validateBody;