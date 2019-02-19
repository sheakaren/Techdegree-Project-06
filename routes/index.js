// Require Methods
const express = require('express');
const data = require('../data/data.json');

// Create a Router Instance
const router = express.Router();

// Redirect to Index page
router.get('/', (req, res) => {
    res.render('index')
  });

// Render the Index Page
  router.get('/index', (req, res) => {
    res.render('index');
    res.app.locals = data.projects;
});

// Render the About Page
router.get('/about', (req, res) => {
  res.render('about');
  res.app.locals = data.projects;
});

// Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized
  // version of the Pug project template to show off each project. 
  // Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.

 // Unsure how to do this...

router.get('', (req, res) => {


});



module.exports = router;