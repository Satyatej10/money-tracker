const jwt = require('jsonwebtoken');

exports.generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || 'secret');
};
