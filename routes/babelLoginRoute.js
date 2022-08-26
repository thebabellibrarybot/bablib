const express = require('express');
const router = express.Router();

const { getUserLogin, getUserNav, getBox, getDeet } = require('../controllers/babelLoginController');

router.post('/login', getUserLogin);

router.get('/', getUserNav);

router.get('/:title', getBox);

router.get('/:title/deet', getDeet);

module.exports = router; 