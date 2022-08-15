const express = require('express');
const router = express.Router();

const { getBabeltombs, createBabeltombs, getBabeltombMicrofilm, getBabeltombTranscript, getBabeltombTranslate } = require('../controllers/babeltombcontroller')

// get all tombs list
router.get('/', getBabeltombs)

// get a single tomb pdf

// get a microfilm from :id
router.get('/:id/microfilm', getBabeltombMicrofilm)
router.get('/:id/transcript', getBabeltombTranscript)
router.get('/:id/translate', getBabeltombTranslate)

// post a new tomb
router.post('/add', createBabeltombs);




module.exports = router;