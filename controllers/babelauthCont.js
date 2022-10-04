const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    const query = {
        email: email,
        }

    const user = await BabelUserModel.findOne(query);
    if (!user) {return res.json({status: 'err w user', user: false})}

    // eval pswd
    const match = await bcrypt.compare(password, user.password)

    if (match) {

        // mk jwt here eventually
        const accessToken = jwt.sign(
            { "UserInfo": {
                "username": user.username,  // do i really want username or do i want email???
                "roles": user.ability
                }
            },
            'supersecretAcessToken',
            { expiresIn: '15m' }
        );
        const refreshToken = jwt.sign(
            { "username": user.username },
            'supersecretRefreshToken',
            { expiresIn: '1d' }
        );
        
        // save refresh token to current user mongo database...
        const appendage = { $set: { token: refreshToken } }
        await BabelUserModel.updateOne(query, appendage)

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({status: 'ok', user: user, accessToken: accessToken});

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };

