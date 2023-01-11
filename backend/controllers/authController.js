const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {

    const user = req.body.email
    const pwd = req.body.password

    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    const query = { "email": user}

    const foundUser = await BabelUserModel.findOne(query).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);

    if (match) {
        const roles = Object.values(foundUser.ability).filter(Boolean);
        const username = foundUser.username;
        const bird = foundUser.bird;
        const id = foundUser.id;
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email,
                    "roles": roles
                }
            },
            'ACCESS_TOKEN_SECRET',
            { expiresIn: '15m' }
        );
        const refreshToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email,
                    "roles": roles
                }
            },
            'REFRESH_TOKEN_SECRET',
            { expiresIn: '1d' }
        );

         // save refresh token to current user mongo database...
         const appendage = { $set: { token: refreshToken } }
         const updatedUser = await BabelUserModel.updateOne(query, appendage)
         console.log('new mongo user field with refToken from authCont')

        // Creates Secure Cookie with refresh token      *** SameSite = 'none, 'secure' ??
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken, username, user, bird, id });

    } else {
        res.sendStatus(401);
    }
} 

module.exports = { handleLogin };