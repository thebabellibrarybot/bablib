const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelOps = new Schema ({
    abouthead: {type: String, required: false},
    aboutbody: {type: String, required: false},
    title: {type: String, required: false},
    gridtitle: {type: String, required: false},
    body: [{type: Array}]
})

const BabelopsModel = mongoose.model('forusers', babelOps);

module.exports = BabelopsModel;