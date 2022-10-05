const express = require('express');
const router = express.Router();
const babelUserDashController = require('../controllers/babelUserDashController')


// get all tombs list
router.route('/')
    .get( babelUserDashController.getBabelDash);


router.get('/models', babelUserDashController.getUserDash);

 

module.exports = router; 