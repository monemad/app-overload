const csrf = require('csurf');
const { check, validationResult } = require('express-validator');
const csrfProtection = csrf({cookie: true});

const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {

	const validationErrors = validationResult(req);

	if (!validationErrors.isEmpty()) {
		const errors = validationErrors.array().map((error) => error.msg);

		const err = Error('Bad request.');
		err.errors = errors;
		err.status = 400;
		err.title = 'Bad request.';
		return next(err);
	}
	next();
};


const userValidators = [
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a first Name')
        .isLength({ max: 50 })
        .withMessage('First name must not be more than 50 characters long'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a last Name')
        .isLength({ max: 50 })
        .withMessage('Last name must not be more than 50 characters long'),
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a username')
        .isLength({ max: 50 })
        .withMessage('Username must not be more than 50 characters long'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for email address')
        .isLength({ max: 255 })
        .withMessage('Email must not be more than 255 characters long')
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
        .isLength({ max: 50 })
        .withMessage('Passsword must not be more than 50 characters long')
        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
        .withMessage('Password is not formatted correctly'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password confirmation')
        .isLength({ max: 50 })
        .withMessage('Passsword confirmation must not be more than 50 characters long')
        .custom(async (confirmPassword, {req}) => {
            const password = req.body.password
            if(password !== confirmPassword){
                throw new Error('Passwords must be the same')
            }
        })
        .withMessage('Passwords do not match'),
];

const loginValidators = [
    check('emailAddress')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for email address'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password')
];

module.exports = {
    asyncHandler,
    csrfProtection,
    userValidators,
    loginValidators,
    handleValidationErrors
}
