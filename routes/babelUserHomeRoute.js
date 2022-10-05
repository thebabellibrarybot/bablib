const express = require('express');
const router = express.Router();
const babelUserDashController = require('../controllers/babelUserDashController')
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');


// get all tombs list
router.route('/')
    .get( verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor), babelUserDashController.getBabelDash);


router.route('/models')
    .get( verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor), babelUserDashController.getUserDash);

 

module.exports = router; 