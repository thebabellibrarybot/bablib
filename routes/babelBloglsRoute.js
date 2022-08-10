const express = require('express');
const router = express.Router();
const { getBabelBlogls } = require('../controllers/babelblogController')

// get all blogs list
router.get('/', getBabelBlogls)

/* get blog by ID
router.get('/babelblog/:id', getBabelBlogById)

// post blog 
router.get('/mkbabelblog', postBabelBlogbyMain)
 */

module.exports = router; 