const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { AnswerComment, QuestionComment , Question , Answer } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');
const { requireAuth } = require('../auth');


//Add a new Question Comment
router.post('/q/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const newComment = req.body.comment
  const commentId = req.params.id
  const myComment = await QuestionComment.findByPk(commentId, {
    include: Question
  });

  const questionId = myComment.questionId
  myComment.comment = newComment
  await myComment.save()
  res.redirect(`/questions/${questionId}`)

}));

//Add a new Answer comment
router.post('/a/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const newComment = req.body.comment
    const commentId = req.params.id
    const myComment = await AnswerComment.findByPk(commentId, {
      include: Answer
    });
    const questionId = myComment.Answer.questionId
    myComment.update({ comment: newComment })
    res.redirect(`/questions/${questionId}`)
  }));

//Update a question comment
router.put('/q/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const commentId = req.params.id

  const myComment = await QuestionComment.findByPk(commentId);
  myComment.comment = req.body.comment
  await myComment.save()
  res.end()

}));

//Update an answer comment
router.put('/a/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const commentId = req.params.id

  const myComment = await AnswerComment.findByPk(commentId);
  myComment.comment = req.body.comment
  await myComment.save()
  res.end()

}));

//Delete a question comment
router.delete('/q/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  const myComment = await QuestionComment.findByPk(commentId, {
    include: Question
  });

  const questionId = myComment.questionId
  await myComment.destroy();
}));

//Delete an answer comment
router.delete('/a/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  const myComment = await AnswerComment.findByPk(commentId, {
    include: Answer
  });

  const answerId = myComment.answerId
  await myComment.destroy();
}));

module.exports = router;
