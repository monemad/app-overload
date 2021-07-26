const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { User } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');

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
  const validationErrors = validationResult(req)
  const {firstName, lastName, username, password, email} = req.body
  const hashedPassword = bcrypt.hash(password, 12)
  const user = await User.build({firstName, lastName, username, email, hashedPassword, reputation: 0, avatarURL:'../public/images/default.png',})
  if(validationErrors.isEmpty()){
    await user.save()
//NEED TO IMPLEMENT USER AUTHERIZATION
res.redirect('/users')
  }else{
    const errors = validationErrors.array().map(error => error.msg)
    const csrfToken = req.csrfToken();
    res.render('user-register', {errors, user , csrfToken})
  }
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
