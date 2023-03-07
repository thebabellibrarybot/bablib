const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelusertombsdetailsSchema = new Schema({
    access_key: { type: String, required: false },
    page_num: {type: Number, required: false },
    page_size: [{type: Number}],
    buk: { type: String, required: false },
    s3_uri: { type: String, required: false },
    arn: { type: String, required: false },
    obj_uri: { type: String, required: false },
    book_title: { type: String, required: false },
    book_date: { type: String, required: false },
    book_area: { type: String, required: false },
    current_lib: { type: String, required: false },
    type: { type: String, required: false }

})
 
const BabelUserTombDetailsModel = mongoose.model('userbooksdetails', babelusertombsdetailsSchema)

module.exports = BabelUserTombDetailsModel;