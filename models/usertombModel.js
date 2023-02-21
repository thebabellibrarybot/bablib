const mongoose = require('mongoose');

const Schema = mongoose.Schema
 
const babelusertombsSchema = new Schema({
    book_title: { type: String, required: false },
    tombID: { type: String, required: false },
    language: { type: String, required: false },
    date: { type: String, required: false },
    patron: { type: String, required: false },
    location: { type: String, required: false },
    digitization: { type: String, required: false },
    current_lib: { type: String, required: false },
    file: { type: Array, required: false }, //array
    s3buk: {type: String, required: false },
    username: { type: String, required: false } 
})

const BabelUserTombModel = mongoose.model('userbooksoverview', babelusertombsSchema)

module.exports = BabelUserTombModel;