// Require Methods
const express = require('express');
const data = require('../data/data.json');

// Create a Router Instance
const router = express.Router();

// Redirect to Index page
router.get('/', (req, res) => {
    res.render('index')
  });

//-An "about" route (/about) to render the "About" page
router.get('/about', (req, res) => {
    res.render('about');
  });

  //-An "index" route (/) to render the "Home" page
  router.get('/index', (req, res) => {
    res.render('index');
    res.app.locals = data.projects;
});







module.exports = router;