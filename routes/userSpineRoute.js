const express = require('express');
const router = express.Router();

const { getBabelDash } = require('../controllers/babelUserController');

router.get('/', getBabelDash);

module.exports = router; 