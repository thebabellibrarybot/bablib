const BabelUserModel = require('../models/UserModel');
const UserDashModel = require('../models/UserDashModel');


const getBabelDash = async (req, res) => {

    console.log('get babel dash')
    // first I'll need to get info from babelusermodel to get profile ability ect
    /*  const secpasscode = req.body.pass
        const available = await BabelUserModel.find(query)
        if available.looks('ok') {continue}
        */
    // then get the dashboard options allocated to that user
    const dashboard = await UserDashModel.find({});
    console.log(dashboard, 'userdashboard stuff')
    res.status(200).json(dashboard);

};


module.exports = { getBabelDash };

