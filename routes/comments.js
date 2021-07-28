const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const { AnswerComment, QuestionComment , Question , Answer } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { validationResult } = require('express-validator');



router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const answerComment = await AnswerComment.findByPk(commentId);

    //show same text area box
    res.render('comment-edit', { title: 'Edit Comment', answerCommentId, csrfToken: req.csrfToken()});

  }));

router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newComment = req.body.answer
    const commentId = parseInt(req.params.id, 10);
    const comment = await AnswerComment.findByPk(commentId);
    comment.update({comment: newComment})

  }));


router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const answerComment = await AnswerComment.findByPk(commentId);
    await answerComment.destroy();
    res.redirect('/');

  }));


router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const Id = parseInt(req.params.id, 10);
    const questionComment = await QuestionComment.findByPk();

    //show same text area box
    res.render('comment-edit', { title: 'Edit Comment', questionCommentId, csrfToken: req.csrfToken()});

  }));

router.post('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const newComment = req.body.answer
    const commentId = parseInt(req.params.id, 10);
    const comment = await QuestionComment.findByPk(commentId);
    comment.update({comment: newComment})

  }));


router.post('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10);
    const questionComment = await QuestionComment.findByPk(commentId);
    await questionComment.destroy();
    res.redirect('/');

  }));


  module.exports = router;
