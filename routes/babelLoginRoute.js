const express = require('express');
const router = express.Router();

const { getUserLogin, getUserNav, getBox, getDeet, getUserAuth, postUserAuth } = require('../controllers/babelLoginController');

// user auth reg stuff
router.post('/login', getUserLogin);

router.get('/', getUserNav);

router.get('/quote', getUserAuth);

router.post('/quote', postUserAuth)


// where's this stuff go to 
router.get('/:title', getBox);

router.get('/:title/deet', getDeet);

module.exports = router; 