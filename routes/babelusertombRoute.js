const express = require('express');
const router = express.Router();
const babelusertombsController = require('../controllers/babelusertombsController');
const multer = require('multer');

// Create a Multer storage object with S3 options // MIDDLEWARE ELEMENT (SHOULD BE EXPORTED TO MIDDLEWARE DIR)
const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null, '');
    },
  }); const upload = multer({ storage });

// get all user tombs list
router.route('/usertombslist')
    .get( babelusertombsController.getusertombs );

// add a tomb


// Route to handle file uploads
router.post('/addusertomb', upload.array('files'), babelusertombsController.postusertomb);

 
// get user tomb detail
//router.route('/usertombslist/:id')
//    .get( babelusertombsController.getusertombdeet );

module.exports = router; 