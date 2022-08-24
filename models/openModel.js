const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelOps = new Schema ({
    title: {type: String, required: false},
    icon: {type: String, required: false},
    bodyhead: {type: String, required: false},
    bodybutton: {type: String, required: false},
    bodydeetH: {type: String, required: false},
    bodydeetB: [{content: {type: String},
                links: {type: String}}],
    classname: [{type: String}]
})

const BabelopsModel = mongoose.model('aboutForusers', babelOps);

module.exports = BabelopsModel;