const express = require('express');
const router = express.Router();

const { handleNewUser } = require('../controllers/babelRegCont');

router.post('/', handleNewUser);

module.exports = router; 