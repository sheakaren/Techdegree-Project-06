// Require Express
const express = require('express');

// Create a Router Instance
const router = express.Router();

// Require the JSON file with all project data
const {data} = require('../data/data.json');

// Redirect to Index page
router.get('/', (req, res) => {
    res.redirect('index')
  });

// Render the Index Page
router.get('/index', (req, res) => {
  const projects = data["projects"];
  res.render('index', { projects } );
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

router.get('/projects/:id', (req, res) => {
  // Add data as an object that contains data to be passed to the Pug template
  const projects = data["projects"];
  const id = req.params.id;
  // Render the above variables as projects
  res.render('projects', {id, projects});
});



module.exports = router;