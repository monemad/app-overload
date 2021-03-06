const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { Answer, AnswerComment, Question } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');
const { requireAuth } = require('../auth');



router.post('/:id(\\d+)/comments', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
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

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
  const answer = await Answer.findByPk(req.params.id)
  await answer.destroy()
}));

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const answerId = parseInt(req.params.id, 10);
  const answer = await Answer.findByPk(answerId);
  answer.answer = req.body.answer;
  await answer.save()
  res.end()
}));


  module.exports = router;
