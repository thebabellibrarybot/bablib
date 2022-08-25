const express = require('express');
const router = express.Router();

const { getUserLogin, getUserNav, getBox } = require('../controllers/babelLoginController');

router.post('/login', getUserLogin);

router.get('/', getUserNav);

router.get('/:title', getBox);

module.exports = router; 