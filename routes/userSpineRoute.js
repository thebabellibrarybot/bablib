const express = require('express');
const router = express.Router();

const { getBabelDash, getUserDash } = require('../controllers/babelUserController');

router.get('/', getBabelDash);

router.get('/mymodels', getUserDash);

module.exports = router;  