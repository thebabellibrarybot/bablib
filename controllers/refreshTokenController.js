const BabelUserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {

    console.log('ref token fired')
    const cookies = req.cookies;

    if (!cookies?.jwt) return res.sendStatus(401);
    console.log('got cookies okay from refTokenCont')
    const refreshToken = cookies.jwt;
    const query = { "token": refreshToken }

    const foundUser = await BabelUserModel.findOne(query);
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    console.log('foundUser okay from refTokenCont')
    jwt.verify(
        refreshToken,
        'REFRESH_TOKEN_SECRET',
        (err, decoded) => {
            if (err || foundUser.username !== decoded.UserInfo.email) return res.sendStatus(403);
            console.log('got decoded okay from refTokenCont')
            const roles = Object.values(foundUser.ability);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                'ACCESS_TOKEN_SECRET',
                { expiresIn: '30s' }
            );
            res.json({ roles, accessToken })
        }
    );
}

module.exports = { handleRefreshToken }
/*

const handleRefreshToken = async (req, res) => {

    console.log('ref handler fired')
    const cookies = req.cookies;
    console.log(req, 'refresh req')
    console.log(cookies, 'cookies')
    if (!cookies?.jwt)  return res.status(401);
    const refreshToken = cookies.jwt;

    const query = {
        "token": refreshToken
    }
    // find email in mongo
    const foundUser = BabelUserModel.findOne(query).exec();
    if (!foundUser) return res.sendStatus(403).json({ 'msg': 'cant find user in mongo'});

    // eval pwd
    jwt.verify(
        refreshToken,
        'REFRESH_TOKEN_SECET',
        (err, decoded) => {
            if (err || foundUser.email !== decoded.email) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "email": decoded.email,
                        "roles": roles
                    }
                },
                "ACCESS_TOKEN_SECRET",
                {expiresIn: '5m'}
            );
            res.json({ roles, accessToken })
        }
    );
}

module.exports = { handleRefreshToken }; 
*/