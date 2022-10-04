const express = require('express');
const router = express.Router();

const {  getUserNav, getBox, getDeet } = require('../controllers/babelLoginController');

// user auth reg stuff
//router.post('/login', getUserLogin);

router.get('/', getUserNav);


// where's this stuff go to 
router.get('/:title', getBox);

router.get('/:title/deet', getDeet);

module.exports = router; 