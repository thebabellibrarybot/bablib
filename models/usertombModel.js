const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelusertombsSchema = new Schema({
    tombname: { type: String, required: true },
    tombSubName: { type: String, required: true },
    oriiginalLanguage: { type: String, required: true },
    dateCreated: { type: String, required: true },
    patron: { type: String, required: true },
    country: { type: String, required: true },
    digitization: { type: String, required: true },
    library: { type: String, required: true },
    filename: { type: String, required: true },
    filetype: { type: String, required: true },
    size: { type: String, required: true },
    lastModifiedDate: { type: String, required: true },
    path: { type: String, required: true },
    s3_buk: {type: String, required: true },
    email: { type: String, required: true },
    pwd: { type: String, required: true }
})

const BabelUserTombModel = mongoose.model('userbooksoverview', babelusertombsSchema)

module.exports = BabelUserTombModel;