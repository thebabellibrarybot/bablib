const express = require('express');
const router = express.Router(); 

const { getUserNav, getBox, getDeet } = require('../controllers/babelForUsersController');

router.get('/', getUserNav)

router.get('/:title', getBox);

router.get('/:title/deet', getDeet);

module.exports = router; 