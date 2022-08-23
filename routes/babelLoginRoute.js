const express = require('express');
const router = express.Router();

const { getUserLogin } = require('../controllers/babelLoginController');

router.post('/login', getUserLogin);

module.exports = router; 