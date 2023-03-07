const mongoose = require('mongoose');

const Schema = mongoose.Schema

const babelUserRoleModel = new Schema ({
    rotatorType: { type: String, required: false},
    rotatorUrlParam: { type: String, required: false },
    rotatorRoles: [{type: Array}],
    rotatorSyle: { type: String, required: false },
    rotatorAbility: {type: String, required: false}
}) 

const UserRolesModel = mongoose.model('userRotators', babelUserRoleModel);

module.exports = UserRolesModel;