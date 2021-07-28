const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { Answer, AnswerComment, Question } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');



router.post('/:id(\\d+)/comments', csrfProtection, asyncHandler(async (req, res) => {
    // const validationErrors = validationResult(req)

    const { comment } = req.body;
    const answerComment = await AnswerComment.create({
      comment,
      votes: 1,
      answerId: req.params.id,
      userId: res.locals.user.id
    });

    const answer = await Answer.findByPk(req.params.id, {
      include: Question
    })

    const id = answer.Question.id

    res.redirect(`/questions/${id}`)
  }));


router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    res.render('answer-edit', { title: 'Edit Answer',answer, csrfToken: req.csrfToken(),});

  }));

router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newAnswer = req.body.answer
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    answer.update({ newAnswer })

  }));


router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const answerId = parseInt(req.params.id, 10);
    const answer = await Answer.findByPk(answerId);
    await answer.destroy();
    res.redirect('/');
  }));


  module.exports = router;
