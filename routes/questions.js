const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');

const { Question, Answer, QuestionComment, AnswerComment, User } = require('../db/models')

const { asyncHandler, csrfProtection, userValidators, loginValidators, handleValidationErrors } = require('./utils');

/* GET the questions page to view the top questions */
router.get('/', asyncHandler(async (req, res, next) => {
    const questions = await Question.findAll({
        include: Answer
    });
    // console.log(questions)
    res.render('popular-questions', { questions })
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
        // include: [AnswerComment, User],
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

    // console.log(answers[0].User.firstName)

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
    const question = await Question.findByPk(req.params.id)
    question.title = req.body.title
    question.details = req.body.details
    await question.save()
}));

/* Delete a specific question by id */
router.get('/:id(\\d+)/delete', asyncHandler(async (req, res, next) => {
    const question = await Question.findByPk(req.params.id)
    await question.destroy()
    res.redirect('/questions')
}));

router.post('/search', asyncHandler(async (req, res) => {
    console.log('we in it');
    const { searchTerm } = req.body;
    const searchResult = await Question.findAll({
        where: {
            title: {
                [Op.iLike]: searchTerm
            }
        }
    })
    console.log(searchResult);
    res.json(searchResult);
}));

module.exports = router;
