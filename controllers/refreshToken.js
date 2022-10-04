const jwt = require('jsonwebtoken');
const BabelUserModel = require('../models/UserModel');


const handleRefreshToken = async (req, res) => {

    console.log('looking for cookies')
    const cookies = req.cookies;
    if (!cookies?.jwt) {return res.sendStatus(401)};
    console.log(cookies.jwt, 'cookies jwt from ref tokesn')
    const refreshToken = cookies.jwt;

    const query = {
        token: refreshToken
    }

    const user = await BabelUserModel.findOne(query);
    if (!user) {return res.json({status: 'err forbidden 403 from ref token controller', user: false})}
    // eval pswd
    jwt.verify(
        refreshToken,
        'supersecretRefreshToken',
        (err,decoded) => {
            if (err || user.username !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { "UserInfo": {
                    "username": user.username,  // do i really want username or do i want email???
                    "roles": user.ability
                    }
                },
                'supersecretAcessToken',
                { expiresIn: '15m' }
            );
            res.json({ accessToken })
        }
    );
}

module.exports = { handleRefreshToken };