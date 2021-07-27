const createError = require('http-errors');
const express = require('express');
const router = express();

// create a test error
router.get('/test-error', (req, res) => {
    throw new Error("This is a test error");
})

// catch 404 and forward to error handler
router.use((req, res, next) => {
    next(createError(404));
});

// 404 error handler
router.use((err, req, res, next) => {
    if (err.status === 404) {
        return res.render('file-not-found')
    }

    next(err);
})

// error handler
router.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = router;
