const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { Answer } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');




router.post('/:id/comments', csrfProtection, asyncHandler(async (req, res) => {
    // const validationErrors = validationResult(req)
    const { comment } = req.body;
    const answer = Answer.build({ comment });
  }));


router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    console.log(answer.answer)
    res.render('answer-edit', { title: 'Edit Answer', answerId, csrfToken: req.csrfToken(),});

  }));

router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newAnswer = req.body.answer
    console.log(newAnswer)
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    answer.update({answer: newAnswer})

  }));


router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    await answer.destroy();
    res.redirect('/');
  }));


  module.exports = router;
