const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babeltombsSchema = new Schema({
    book_title: { type: String, required: true },
    s3buk: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    current_lib: { type: String, required: true },
    bookID: { type: String, required: true },
    language: { type: String, required: true },
    stle: { type: String, required: true },

})

const BabelTombModel = mongoose.model('booksoverview', babeltombsSchema)

module.exports = BabelTombModel;