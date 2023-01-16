const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelUserDataModel = new Schema ({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bird: { type:String, required: true },
    ability: {type: Array, required: true},
    token: { type: String, required: false },
    theme: { type: String, required: false }
})

const BabelUserModel = mongoose.model('userdata', babelUserDataModel);

module.exports = BabelUserModel;