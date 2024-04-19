var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async (req, res) => {
  if(req.session.user)
    return res.status(403).send('Already logged in');
  try {
    const user = await User.login(req.body);
    if(!user)
      return res.status(403).send('Username and password not found');
    req.session.user = user;
    return res.status(200).send('Login succesful');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.errorResponse.errmsg);
  }
});

router.post('/register', async (req, res) => {
  try {
    const user = await User.register(req.body);
    req.session.user = user;
    return res.status(200).send('Register succesful');
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.errorResponse.errmsg);
  }
});

router.post('/logout', async (req, res) => {
  if(!req.session.user)
    return res.status(403).send('Logout failed');
  req.session = null;
  res.status(200).send('Logout successful');
});

module.exports = router;