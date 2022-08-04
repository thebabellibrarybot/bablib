const express = require('express');
const router = express.Router();
const { getBabelHomeimgs } = require('../controllers/babelhomController')

// get all tombs list
router.get('/', getBabelHomeimgs)

 

module.exports = router; 