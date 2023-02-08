const express = require('express');
const router = express.Router();
const babelUserDashController = require('../controllers/babelUserDashController')



// get all tombs list
router.route('/')
    .get(babelUserDashController.getBabelDash);

router.route('/:id')
    .get( babelUserDashController.getUserInfo );

router.route('/:id/optpanel')
    .get( babelUserDashController.getUserOptionsPanel );

router.route('/userstats/:id')
    .get( babelUserDashController.getUserStats);

router.route('/rotator/:id')
    .get( babelUserDashController.getUserDash);

 
 
module.exports = router; 