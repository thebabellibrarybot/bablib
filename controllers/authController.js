const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
    console.log('fired handle login auth')
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
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "email": foundUser.email,
                    "roles": roles
                }
            },
            'ACCESS_TOKEN_SECRET',
            { expiresIn: '30s' }
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
        /*
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        console.log(result);
        console.log(roles);
        */

         // save refresh token to current user mongo database...
         const appendage = { $set: { token: refreshToken } }
         const updatedUser = await BabelUserModel.updateOne(query, appendage)
         console.log(updatedUser, 'new mongo user field')

        // Creates Secure Cookie with refresh token      *** SameSite = 'none, 'secure' ??
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        console.log(refreshToken, 'sent as cokkie from auth')

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };

/*
const handleLogin = async (req, res) => {

    const user = req.body.email;
    const pwd = req.body.password;
    if (!user || !pwd) return res.sendStatus(400).json({ 'msg': 'username and pwd req' });
    const query = {
        "email": user
    }
    // find email in mongo
    const foundUser = await BabelUserModel.findOne(query);
    if (!foundUser) return res.sendStatus(401).json({ 'msg': 'cant find user in mongo'});

    // eval pwd
    const match = await bcrypt.compare(pwd, foundUser.password)
    if (match) {
        const roles = Object.values(foundUser.ability)
        // create JWT
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            'ACCESS_TOKEN_SECRET',
            { expiresIn: '5m' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            'REFRESH_TOKEN_SECET',
            { expiresIn: '1d' }
        );
        // add refreshToken to MONGO
        foundUser.refreshToken = refreshToken
        const result = await foundUser.save();
        console.log(result)
        console.log(roles)

        // creates secure cookie 
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken })
    } else {
        res.sendStatus(401).json({"msg from handlelogin": "can't match password"});
    }
}

module.exports = { handleLogin }; 

*/