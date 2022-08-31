const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelbloglsSchema = new Schema({
    title: { type: String, required: false },
    date: { type: String, required: false },
    auth: { type: String, required: false },
    body: [{types: String}]
})
 
const Babelblogdeet = mongoose.model('babelofficialblogs', babelbloglsSchema)

module.exports = Babelblogdeet;