const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { User } = require('../db/models');
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');
const { loginUser, logoutUser } = require('../auth');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  res.json(await User.findAll());
});

// Get the user registration form
router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  const newUser = await User.build();
  const csrfToken = req.csrfToken();
  res.render('user-register', { newUser, csrfToken });
}));

// Submit the user registration form
router.post('/', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  const validationErrors = validationResult(req);
  const {firstName, lastName, username, password, email} = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.build({ firstName, lastName, username, email, hashedPassword, reputation: 0, avatarURL:'../public/images/default.png' });
  if (validationErrors.isEmpty()) {
    await newUser.save();
    loginUser(req, res, newUser);
    res.redirect('/');
  } else {
    const errors = validationErrors.array().map(error => error.msg);
    const csrfToken = req.csrfToken();
    res.render('user-register', { errors, newUser , csrfToken });
  }
}));

// Get the login form
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  const csrfToken = req.csrfToken();
  res.render('user-login', { csrfToken });
}));

// Submit the login form
router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const validationErrors = validationResult(req);
  const { email, password } = req.body;
  const csrfToken = req.csrfToken();

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map(error => error.msg);
    return res.render('user-login', { csrfToken, errors })
  }

  const user = await User.findOne({ where: { email } });
  const errors = []
  if (user) {
    let match = await bcrypt.compare(password, user.hashedPassword);
    if (match){
      loginUser(req, res, user);
      return res.redirect('/');
    }

    errors.push('Could not login with provided email and password. Please try again!')
    return res.render('user-login', { csrfToken, errors })
  }

  errors.push('No user with that email found!');
  return res.render('user-login', { csrfToken, errors });

}));

router.post('/logout', asyncHandler(async (req, res) => {
  logoutUser(req, res)
  res.redirect('/');
}));


module.exports = router;
