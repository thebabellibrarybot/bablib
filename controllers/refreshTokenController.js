const BabelUserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
 
    const cookies = req.cookies;

    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    const query = { "token": refreshToken }

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

module.exports = { handleRefreshToken };