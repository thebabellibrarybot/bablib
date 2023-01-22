const express = require('express');
const router = express.Router();
const babelUserDashController = require('../controllers/babelUserDashController')
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require('../middleware/verifyJWT');


// get all tombs list
router.route('/')
    .get( verifyJWT, verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor), babelUserDashController.getBabelDash);

router.route('/:id')
    .get( babelUserDashController.getUserInfo );

router.route('/:id/optpanel')
    .get( babelUserDashController.getUserOptionsPanel );

router.route('/userstats/:id')
    .get( babelUserDashController.getUserStats);

router.route('/rotator/:id')
    .get( babelUserDashController.getUserDash);

 
 
module.exports = router; 