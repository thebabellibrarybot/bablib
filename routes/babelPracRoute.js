const express = require('express');
const router = express.Router();
const { getBabelPrac } = require('../controllers/babelpracController')
const { getBabelTombDeets } = require('../controllers/babelpracDeets')

// get all tombs list
router.get('/', getBabelPrac)

router.get('/:id', getBabelTombDeets)


module.exports = router;