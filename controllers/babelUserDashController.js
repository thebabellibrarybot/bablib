const UserDashModel = require('../models/UserDashModel');
const UserRolesModel = require('../models/UserRolesModel');
const BabelUserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');


const getBabelDash = async (req, res) => {

    const dashboard = await UserDashModel.find({});

    res.status(200).json(dashboard);
    console.log('getbabeldash firesd')

}; 

const getUserInfo = async (req, res) => {

    const cookies = req.cookies;

    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const query = { "token": refreshToken }

    console.log(refreshToken, 'token')
    const foundUser = await BabelUserModel.findOne(query);
    if (!foundUser) return res.sendStatus(402); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        'REFRESH_TOKEN_SECRET',
        (err, decoded) => {
            if (err || foundUser.email !== decoded.UserInfo.email) return res.sendStatus(402);
            console.log('got decoded okay from refTokenCont')
            const roles = Object.values(foundUser.ability);
            const username = foundUser.username;
            const id = foundUser._id
            const email = foundUser.email
            const bird = foundUser.bird

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles,
                        "bird": bird
                    }
                },
                'ACCESS_TOKEN_SECRET',
                { expiresIn: '15m' }
            );
            res.json({ roles, accessToken, username, id, email, bird })
        }
    );


}

// DELET ??
const getUserDash = async(req,res) => {
    
    const url = req.url
    const query = {rotatorUrlParam: url}
    const rotatorData = await UserRolesModel.find(query)

    if (!rotatorData) {
        return res.status(404).json({err: 'no such rotator'})
    } else {

        res.status(200).json(rotatorData)
    }
    console.log('getUserDashFired')
};

module.exports = { getBabelDash, getUserDash, getUserInfo };