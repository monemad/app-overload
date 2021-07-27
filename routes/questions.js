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
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const question = await Question.findOne({
        where: {
            id: req.params.id
        }
    })
    const answers = await Answer.findAll({
        where: {
            questionId: req.params.id
        }
    })
    const qComments = await QuestionComment.findAll({
        where: {
            questionId: req.params.id
        }
    })

    //how do we implement this so that i can get every comment on every answer?
    const aComments = await AnswerComment.findAll({
        where: {
            answerId: req.params.id
        }
    })

    console.log(answers)

    res.render('question', {
        question,
        answers,
        qComments,
        aComments
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
        //we need to get the current userId here
        userId: res.locals.userId
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
        questionId: 1, // make this dynamic
        userId: 1 //make this dynamic
    })
    res.redirect(`/questions/${req.params.id}`)
}));

/* Submit an commment to a specific question which will be dynamically added to the answers list */
router.post('/:id(\\d+)/comments', asyncHandler(async (req, res, next) => {
    res.send(`Here in the /questions/${req.params.id}/comments POST route handler to comment on a specific question`);
}));

/* Update a specific question by id */
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    res.send(`Here in the /questions/${req.params.id} PUT route handler to update a specific question`);
}));

/* Delete a specific question by id */
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    res.send(`Here in the /questions/${req.params.id} DELETE route handler to delete a specific question`);
}));

module.exports = router;