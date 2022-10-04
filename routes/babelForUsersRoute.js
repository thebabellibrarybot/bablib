const express = require('express');
const router = express.Router();

const { getBox, getDeet } = require('../controllers/babelForUsersController');


router.get('/:title', getBox);

router.get('/:title/deet', getDeet);

module.exports = router; 