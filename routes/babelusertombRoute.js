const express = require('express');
const router = express.Router();
const babelusertombsController = require('../controllers/babelusertombsController');
const multer = require('multer');

// Create a Multer storage object with S3 options // MIDDLEWARE ELEMENT (SHOULD BE EXPORTED TO MIDDLEWARE DIR)
const storage = multer.memoryStorage({ 
    destination: function (req, file, cb) {
      cb(null, '');
    },
  }); 
  const fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG and PNG are allowed.'));
    }
  };
  const upload = multer({ 
    storage,
    limits: {
      files: 10
    },
    fileFilter,
    transforms: [
      {
        id: 'original',
        key: function (req, file, cb) {
          cb(null, file.originalname);
        },
        transform: function (req, file, cb) {
          cb(null, sharp().resize(200));
        },
      },
    ]
   });



// get all user tombs list
router.route('/usertombslist')
    .get( babelusertombsController.getusertombs );

// append tomb info to uploaded files
router.post('/addusertombinfo', babelusertombsController.postusertombinfo)


// Route to handle file uploads
router.post('/addusertomb', upload.array('files'), babelusertombsController.postusertomb);

// get tomb info for tombLister
router.get('/mytombs/:id', babelusertombsController.getusertombs);

 
// get user tomb detail
//router.route('/usertombslist/:id')
//    .get( babelusertombsController.getusertombdeet );

module.exports = router; 