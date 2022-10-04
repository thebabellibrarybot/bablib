const express = require('express');
const router = express.Router();

// verification of roles
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');


const { getBabelDash, getUserDash } = require('../controllers/babelUserController');

router.route('/')
    .get(verifyRoles(ROLES_LIST.User, ROLES_LIST.Editor), getBabelDash);

router.get('/mymodels', getUserDash);

module.exports = router;  