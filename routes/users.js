const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { User, Question, Answer } = require('../db/models');
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');
const { loginUser, logoutUser, requireAuth } = require('../auth');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // res.send('respond with a resource');
  const users = await User.findAll()
  res.render('users', { users });

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
  const newUser = await User.build({ firstName, lastName, username, email, hashedPassword, reputation: 0, avatarURL:'/images/default.png' });
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

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const displayUser = await User.findByPk(parseInt(userId, 10));
  const questions = await Question.findAll({ where: { userId }, include: Answer});
  const answers = await Answer.findAll({ where: { userId }, include: Question });
  res.render('profile', { displayUser, questions, answers });
}))

// Submit JSON to update user
router.put('/profile', requireAuth, asyncHandler(async (req, res) => {
  const { firstName, lastName, username } = req.body;
  const user = await User.findByPk(res.locals.user.id);
  await user.update({ firstName, lastName, username });
  res.end();
}))

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
      return res.render('index', { title: 'App Overload' });
    }

    errors.push('Could not login with provided email and password. Please try again!')
    return res.render('user-login', { csrfToken, errors })
  }

  errors.push('No user with that email found!');
  return res.render('user-login', { csrfToken, errors });

}));

router.get('/logout', requireAuth, asyncHandler(async (req, res) => {
  logoutUser(req, res)
  res.redirect('/');
}));

router.get('/demo', asyncHandler(async (req, res) => {
  if(res.locals.authenticated) return res.redirect('/');
  let demo = await User.findOne({ where: {email: 'demo@user.com'} });
  if (!demo) {
    demo = await User.build({
      firstName: 'Demo User',
      lastName: ':)',
      username: 'demouser',
      email: 'demo@user.com',
      hashedPassword: await bcrypt.hash('password', 12),
      reputation: 0,
      avatarURL:'/images/default.png'
    })
    await demo.save();
  }
  loginUser(req, res, demo);
  res.redirect('/');
}));

router.get('/profile', requireAuth, asyncHandler(async (req, res) => {
  const questions = await Question.findAll({ where: { userId: res.locals.user.id }, include: Answer});
  const answers = await Answer.findAll({ where: { userId: res.locals.user.id }, include: Question });
  res.render('profile', { displayUser: res.locals.user, questions, answers })
}))

module.exports = router;
