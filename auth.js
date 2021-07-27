const { User } = require('./db/models')

const loginUser = (req, res, user) => {
    req.session.auth = {
        userId: user.id
    };
};

const restoreUser = async (req, res, next) => {
    console.log(req.session);
    if(req.session.auth) {
        const { userId } = req.session.auth;

        try {
            const user = await User.findByPk(userId);

            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (e) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/users/login');
    }
    return next();
}

const logoutUser = async (req, res, next) => {
    delete req.session.auth;
}

module.exports = {
    loginUser,
    logoutUser,
    restoreUser,
    requireAuth
}
