const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const { Question, Answer, QuestionComment, AnswerComment, User } = require('../db/models')

const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');
const { requireAuth } = require('../auth');

/* GET the questions page to view the top questions */
router.get('/', asyncHandler(async (req, res, next) => {
    const questions = await Question.findAll({
        include: Answer,
        order: [['votes', 'DESC']]
    });

    if (res.locals.user) {
        res.render('popular-questions', { questions, userId: res.locals.user.id })
    } else {
        res.render('popular-questions', { questions })
    }

}));

/* GET the question page to view a specific question */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
    
    const question = await Question.findOne({
        where: {
            id: req.params.id
        }
    })

    let isMyQuestion = false;
    if(res.locals.user){
        isMyQuestion = question.userId === res.locals.user.id;
    }

    const answers = await Answer.findAll({
        include: [
            User, {
                model: AnswerComment,
                include: [User]
            },
        ],
        where: {
            questionId: req.params.id
        }
    })

    const qComments = await QuestionComment.findAll({
        where: {
            questionId: req.params.id
        },
        include: User
    })

    if (res.locals.user) {
        res.render('question', {
        question,
        answers,
        qComments,
        csrfToken: req.csrfToken(),
        isMyQuestion,
        userId: res.locals.user.id
    });
    } else {
        res.render('question', {
            question,
            answers,
            qComments,
            csrfToken: req.csrfToken(),
            isMyQuestion,
            userId: 0
        });
    }

}));

/* GET the new questions page to answer a specific question */
router.get('/new', requireAuth, asyncHandler(async (req, res, next) => {
    const question = await Question.build()
    res.render('new-question', {question})
}));

//Post a new question
router.post('/', requireAuth, asyncHandler(async (req, res, next) => {
    const {title, details} = req.body
    const question = await Question.create({
        title,
        details,
        votes: 1,
        viewCount: 1,
        userId: res.locals.user.id
    })
    res.redirect('/questions');
}));

/* Submit an answer to a specific question which will be dynamically added to the answers list */
router.post('/:id(\\d+)/answers', requireAuth, asyncHandler(async (req, res, next) => {
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
router.post('/:id(\\d+)/comments', requireAuth, asyncHandler(async (req, res, next) => {
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
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    question.title = req.body.title
    question.details = req.body.details
    await question.save()
    res.end()
}));

/* Delete a specific question by id */
router.get('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    await question.destroy()
    res.redirect('/questions')
}));

//Search for questions
router.post('/search', asyncHandler(async (req, res) => {
    const { searchTerm } = req.body;
    const searchResult = await Question.findAll({
        where: {
            title: {
                [Op.iLike]: searchTerm
            }
        },
        limit: 10
    })
    res.json(searchResult);
}));

module.exports = router;
