const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelhomeimgs = new Schema({
    book_title: { type: String, required: false },
    s3_uri: { type: String, required: false },
    position: { type: String, required: false }
})
 
const BabelHomeModel = mongoose.model('homes', babelhomeimgs)

module.exports = BabelHomeModel;