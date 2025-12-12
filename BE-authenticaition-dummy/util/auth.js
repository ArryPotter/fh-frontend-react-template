const { sign } = require('jsonwebtoken');

const KEY = 'supersecret';

function createJSONToken(email) {
  return sign({ email }, KEY, { expiresIn: '1h' });
}

exports.createJSONToken = createJSONToken;