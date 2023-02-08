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

    const foundUser = await BabelUserModel.findOne(query);
    if (!foundUser) return res.sendStatus(408); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        'REFRESH_TOKEN_SECRET',
        (err, decoded) => {
            if (err || foundUser.email !== decoded.UserInfo.email) return res.sendStatus(402);
            const roles = Object.values(foundUser.ability);
            const username = foundUser.username;
            const id = foundUser._id
            const email = foundUser.email
            const bird = foundUser.bird
            const theme = foundUser.theme

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
        
            res.json({ roles, accessToken, username, id, email, bird, theme })
        }
    );
}

const getUserDash = async(req,res) => {
    
    const url = req.url
    const query = {
        rotatorUrlParam: url
    }
    console.log(url, 'url')
    const nav = await UserRolesModel.findOne(query);
    console.log(nav, 'nav')
    try {
        res.status(200).json(nav)
    } catch (err) {
        res.status(404).json({
            "err": err
        })
    }
}

const getUserOptionsPanel = async (req, res) => {
    const url = req.url;
    console.log(url, 'from userOptionsPanel')
    const query = {
        rotatorUrlParam : url
    }
    const ops = await UserRolesModel.findOne(query);
    console.log(ops, 'from useroptionspanel in userdashcontroller')
    try {
        res.status(200).json(ops.rotatorRoles)
    } catch (err) {
        res.status(400).json({
            "err": err
        })
    }
}
const getUserStats = async (req, res) => {
    const url = req.url;
    console.log(url, 'from userOptionsPanel')
    const query = {
        rotatorUrlParam : url
    }
    console.log(query, 'from stats')
    const ops = await UserRolesModel.findOne(query);
    try {
        res.status(200).json(ops.rotatorRoles)
    } catch (err) {
        res.status(400).json({
            "err": err
        })
    }
}


module.exports = { getBabelDash, getUserDash, getUserInfo, getUserOptionsPanel, getUserStats };