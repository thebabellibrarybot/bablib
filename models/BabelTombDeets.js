const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babeltombsdetailsSchema = new Schema({
    access_key: { type: String, required: true },
    page_num: {type: Number, required: true },
    page_size: [{type: Number}],
    buk: { type: String, required: true },
    s3_uri: { type: String, required: true },
    arn: { type: String, required: true },
    obj_uri: { type: String, required: true },
    book_title: { type: String, required: true },
    book_date: { type: String, required: true },
    book_area: { type: String, required: true },
    current_lib: { type: String, required: true },
    type: { type: String, required: true }

})
 
const BabelTombDetailsModel = mongoose.model('booksdetails', babeltombsdetailsSchema)

module.exports = BabelTombDetailsModel;