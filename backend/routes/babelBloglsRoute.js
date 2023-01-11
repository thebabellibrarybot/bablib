const express = require('express');
const router = express.Router();
const { getBabelBlogls, getBabelBlogById } = require('../controllers/babelblogController')

// get all blogs list
router.get('/', getBabelBlogls)

// get blog by ID
router.get('/:id', getBabelBlogById)

/*
// post blog 
router.get('/mkbabelblog', postBabelBlogbyMain)
 */

module.exports = router; 