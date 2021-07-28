const express = require('express');
const router = express.Router();
const { Question, Answer, QuestionComment, AnswerComment } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');

/* GET the questions page to view the top questions */
router.get('/', asyncHandler(async (req, res, next) => {
    const questions = await Question.findAll();
    res.render('popular-questions', { questions })
}));

/* GET the question page to view a specific question */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    
    const question = await Question.findOne({
        where: {
            id: req.params.id
        }
    })

    const isMyQuestion = question.userId === res.locals.user.id;

    const answers = await Answer.findAll({
        include: AnswerComment,
        where: {
            questionId: req.params.id
        }
    })

    const qComments = await QuestionComment.findAll({
        where: {
            questionId: req.params.id
        }
    })

    // console.log(answers)

    res.render('question', {
        question,
        answers,
        qComments,
        csrfToken: req.csrfToken(),
        isMyQuestion,
        userId: res.locals.user.id
    });
}));

/* GET the new questions page to answer a specific question */
router.get('/new', asyncHandler(async (req, res, next) => {
    const question = await Question.build()
    res.render('new-question', {question})
}));

//Post a new question
router.post('/', asyncHandler(async (req, res, next) => {
    const {title, details} = req.body
    const question = await Question.create({
        title,
        details,
        votes: 1,
        viewCount: 1,
        userId: res.locals.user.id
    })
    const questions = await Question.findAll()
    res.render('popular-questions', {questions})
}));

/* Submit an answer to a specific question which will be dynamically added to the answers list */
router.post('/:id(\\d+)/answers', asyncHandler(async (req, res, next) => {
    const {answer} = req.body
    const newAnswer = await Answer.create({
        answer,
        votes: 0,
        questionId: req.params.id,
        userId: res.locals.user.id
    })
    res.redirect(`/questions/${req.params.id}`)
}));

/* Submit an commment to a specific question which will be dynamically added to the answers list */
router.post('/:id(\\d+)/comments', asyncHandler(async (req, res, next) => {
    const {comment} = req.body
    const newQComment = await QuestionComment.create({
        comment,
        votes: 1,
        questionId: req.params.id,
        userId: res.locals.user.id
    })
    res.redirect(`/questions/${req.params.id}`)
}));

/* Update a specific question by id */
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    //TODO
}));

/* Delete a specific question by id */
router.get('/:id(\\d+)/delete', asyncHandler(async (req, res, next) => {
    const question = await Question.findByPk(req.params.id)

    await question.destroy()
    res.redirect('/questions')
}));

module.exports = router;
