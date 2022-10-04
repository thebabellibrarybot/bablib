const express = require('express');
const router = express.Router();

const { handleLogin } = require('../controllers/babelauthCont');

router.post('/', handleLogin);

module.exports = router; 