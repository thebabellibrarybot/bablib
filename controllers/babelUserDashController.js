const UserDashModel = require('../models/UserDashModel');
const UserRolesModel = require('../models/UserRolesModel');


const getBabelDash = async (req, res) => {

    console.log('get babel dash')
    const dashboard = await UserDashModel.find({});

    res.status(200).json(dashboard);

};


const getUserDash = async(req,res) => {
    
    console.log('getuserdash fired')
    const url = req.url
    const query = {rotatorUrlParam: url}
    console.log(url, 'url')

    const rotatorData = await UserRolesModel.find(query)


    if (!rotatorData) {
        return res.status(404).json({err: 'no such rotator'})
    } else {

        res.status(200).json(rotatorData)
    }


}



module.exports = { getBabelDash, getUserDash };

