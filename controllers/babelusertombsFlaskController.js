const axios = require('axios');
const FormData = require('form-data');

// post tombs into text lines
const mkTextLines = async (req, res) => {
// need to add a handler for files or urls * files in req.files and urls in req.headers
    const formData = new FormData();

    if (Array.isArray(req.files)) {
        // If an array of files was uploaded, append each file to the FormData object
        for (let i = 0; i < req.files.length; i++) {
          formData.append(`file`, req.files[i].buffer, { 
            filename: req.files[i].originalname, 
            contentType: req.files[i].mimetype 
        });
        }
      } else {
        // If a single file was uploaded, append it to the FormData object
        formData.append('file', req.files.buffer, { 
            filename: req.files.originalname, 
            contentType: req.files.mimetype 
        });
      }
      console.log(formData, 'formdata')

    axios.post('http://127.0.0.1:5005/api', formData, {
        headers: {
            ...formData.getHeaders()
        }
    }).then(response => {
        console.log(response.data);
        res.status(200).json(response.data)
    }).catch(err => {
        res.status(500).send('an err occured editing these files')
    })
};

module.exports = { mkTextLines };