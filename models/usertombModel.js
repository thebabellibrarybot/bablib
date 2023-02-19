const mongoose = require('mongoose');

const Schema = mongoose.Schema
 
const babelusertombsSchema = new Schema({
    tombname: { type: String, required: false },
    tombID: { type: String, required: false },
    originalLanguage: { type: String, required: false },
    dateCreated: { type: String, required: false },
    patron: { type: String, required: false },
    country: { type: String, required: false },
    digitization: { type: String, required: false },
    library: { type: String, required: false },
    file: { type: Array, required: false }, //array
    s3_buk: {type: String, required: false },
    username: { type: String, required: false } 
})

const BabelUserTombModel = mongoose.model('userbooksoverview', babelusertombsSchema)

module.exports = BabelUserTombModel;