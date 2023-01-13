const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelUserDashModel = new Schema ({
    dashicon: { type: String, required: true},
    dashitem: { type: String, required: true},
    dashlink: { type: String, required: true},
    dashability: {type: String, required: true}
})

const UserDashModel = mongoose.model('userdashboards', babelUserDashModel);

module.exports = UserDashModel; 