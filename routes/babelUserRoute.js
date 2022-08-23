const express = require('express');
const router = express.Router();

const { createBabelUser } = require('../controllers/babelregController');

router.post('/', createBabelUser);

module.exports = router; 