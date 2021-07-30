const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { AnswerComment, QuestionComment , Question , Answer } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');






router.get('/a/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const commentType = 'a'
    const myComment = await AnswerComment.findByPk(commentId);

    //show same text area box
    res.render('comment-edit', { title: 'Edit Comment',commentType, myComment, commentId , csrfToken: req.csrfToken()});

  }));

router.post('/a/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newComment = req.body.comment
    const commentId = req.params.id
    const myComment = await AnswerComment.findByPk(commentId, {
      include: Answer
    });
    const questionId = myComment.Answer.questionId
    myComment.update({ comment: newComment })
    res.redirect(`/questions/${questionId}`)
  }));


router.post('/a/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const myComment = await AnswerComment.findByPk(commentId,{
      include: Answer
    });
    const questionId = myComment.Answer.questionId
    await myComment.destroy();

    res.redirect(`/questions/${questionId}`)
  }));


router.get('/q/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const commentId = req.params.id
    const commentType = 'q'
    const myComment = await QuestionComment.findByPk(commentId);

    //show same text area box
    res.render('comment-edit', { title: 'Edit Comment', commentType, myComment, commentId, csrfToken: req.csrfToken()});

  }));

router.post('/q/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newComment = req.body.comment
    const commentId = req.params.id
    const myComment = await QuestionComment.findByPk(commentId,{
      include: Question
    });

    const questionId = myComment.questionId
    myComment.comment =  newComment
    await myComment.save()
    res.redirect(`/questions/${questionId}`)

  }));


router.get('/q/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const myComment = await QuestionComment.findByPk(commentId,{
      include: Question
    });


    const questionId = myComment.questionId
    await myComment.destroy();

    res.redirect(`/questions/${questionId}`)
  }));

router.delete('/q/:id(\\d+)', asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  const myComment = await QuestionComment.findByPk(commentId, {
    include: Question
  });

  const questionId = myComment.questionId
  await myComment.destroy();
}));

router.delete('/a/:id(\\d+)', asyncHandler(async (req, res) => {
  const commentId = req.params.id;
  const myComment = await AnswerComment.findByPk(commentId, {
    include: Answer
  });

  const answerId = myComment.answerId
  await myComment.destroy();
}));


  module.exports = router;
