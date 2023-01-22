const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelbloglsSchema = new Schema({
    title: { type: String, required: false },
    date: { type: String, required: false },
    author: { type: String, required: false },
    full: { type: String, required: false }
})
 
const Babelblogls = mongoose.model('blogs', babelbloglsSchema)

module.exports = Babelblogls;