const express = require('express');
const router = express.Router();
const { Question, Answer, QuestionComment, AnswerComment } = require('../db/models')
const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');

/* GET the questions page to view the top questions */
router.get('/', asyncHandler(async (req, res, next) => {
    const questions = await Question.findAll();
    res.render('popular-questions', { questions })
}));

/* GET the questions page to view the top questions */
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    res.send(`Here in the /questions/${req.params.id} GET route handler to see a specific question`);
}));

/* GET the questions page to view the top questions */
router.get('/new', asyncHandler(async (req, res, next) => {
    res.send('here in /questions/new GET route handler to make a new question');
}));

/* Submit an answer to a specific question which will be dynamically added to the answers list */
router.post('/:id(\\d+)/answers', asyncHandler(async (req, res, next) => {
    res.send(`Here in the /questions/${req.params.id}/answers POST route handler to answer a specific question`);
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