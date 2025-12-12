const express = require('express');
const { createJSONToken } = require('../util/auth');

const router = express.Router();

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const token = createJSONToken(email);
  res.json({ token });
});

module.exports = router;
