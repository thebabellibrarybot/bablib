const UserDashModel = require('../models/UserDashModel');
const UserRolesModel = require('../models/UserRolesModel');


const getBabelDash = async (req, res) => {
    const dashboard = await UserDashModel.find({});
    console.log('sending dashboard')
    res.status(200).json(dashboard);
};


const getUserDash = async(req,res) => {
    
    const url = req.url
    const query = {rotatorUrlParam: url}
    const rotatorData = await UserRolesModel.find(query)

    if (!rotatorData) {
        return res.status(404).json({err: 'no such rotator'})
    } else {

        res.status(200).json(rotatorData)
    }
}


module.exports = { getBabelDash, getUserDash };