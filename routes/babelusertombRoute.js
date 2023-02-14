const express = require('express');
const router = express.Router();
const babelusertombsController = require('../controllers/babelusertombsController');

// get all user tombs list
router.route('/usertombslist')
    .get( babelusertombsController.getusertombs );

// add a tomb
router.route('/addusertomb')
    .post( babelusertombsController.postusertomb );

// get user tomb detail
router.route('/usertombslist/:id')
    .get( babelusertombsController.getusertombdeet );