const express = require('express');

const router = express.Router();
const { User } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  res.json(await User.findAll());
});

// Get the user registration form
router.get('/signup', csrfProtection, asyncHandler(async (req, res) => {
  const user = await User.build();
  const csrfToken = req.csrfToken();
  res.render('user-register', {user, csrfToken});
}));

// Submit the user registration form
router.post('/', csrfProtection, userValidators, asyncHandler(async (req, res) => {
  // TODO
}));

// Get the login form
router.get('/login', csrfProtection, asyncHandler(async (req, res) => {
  // TODO
}));

// Submit the login form
router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  // TODO
}));


module.exports = router;
