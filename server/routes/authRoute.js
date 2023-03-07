const express = require('express');
const router = express.Router();

const { handleLogin, editLogin } = require('../controllers/authController');

router.post('/', handleLogin);

router.post('/edited', editLogin)

module.exports = router;  