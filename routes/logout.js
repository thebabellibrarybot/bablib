const express = require('express');
const router = express.Router();
const { handleLogout } = require('../controllers/babelLogoutCont');

router.get('/', handleLogout);


module.exports = router;