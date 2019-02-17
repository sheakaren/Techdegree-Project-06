// Require Methods
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Call the Express Method
const app = express();

// Call and allow use of installed software
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

// Enable Express to use Pug
app.set('view engine', 'pug');

// Set the Routes
const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

// 404 Error Handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Also 404 Error Handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

// Start the Server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});