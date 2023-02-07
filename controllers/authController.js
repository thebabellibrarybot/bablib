const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {

    console.log('handleLogin fired')

    const user = req.body.email
    const pwd = req.body.password

    console.log('looking for', user, pwd)

    if (!user || !pwd)  {
        console.log( 'err from handlelogin') 
        return res.status(409).json({ 'message': 'Username and password are required.' })};
    const query = { 
        "email": user
    }

    const foundUser = await BabelUserModel.findOne(query).exec();
    if (!foundUser) return res.sendStatus(403); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.password);

    if (match) {
        const roles = Object.values(foundUser.ability).filter(Boolean);
        const username = foundUser.username;
        const bird = foundUser.bird;
        const id = foundUser.id;
        const theme = foundUser.theme;
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
         console.log('new mongo user field with refToken from authCont', updatedUser)

        // Creates Secure Cookie with refresh token      *** SameSite = 'none, 'secure' ??
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken, username, user, bird, id, theme });

    } else {
        res.sendStatus(401);
    }
} 


const editLogin = async (req, res) => {
    console.log('editLogin fired')

    const mid = req.body.mid
    const newPassword = await bcrypt.hash(req.body.password, 10)

    console.log(req.body.ability,'bird')

    console.log(mid, newPassword)

    if (!mid || !newPassword)  {
        console.log( 'err from no new mid or newpassword found') 
        return res.status(409).json({ 'message': 'Username and password are required.' })};

    const query = { 
        "_id": mid
    }
    const newinfo = {
        "username": req.body.username,
        "email": req.body.email,
        "password": newPassword,
        "bird": req.body.ability,
        "ability": 2001,
        "theme": req.body.theme
    } 
    console.log('new info from user', newinfo)

    const editedUser = await BabelUserModel.updateOne(query, newinfo)
    if (!editedUser) {
        console.log('no user updated________________')
        res.sendStatus(409).json({'err': 'err updating user'})
    }
    const foundUser = await BabelUserModel.findOne(query).exec();

    console.log('looking for', query, 'found', foundUser)

    if (!foundUser) {
        console.log(foundUser, 'no user found in founduser')
        return res.sendStatus(401);
    }

    const match = await bcrypt.compare(req.body.password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.ability).filter(Boolean);
        const username = foundUser.username;
        const bird = foundUser.bird;
        const id = foundUser.id;
        const email = foundUser.email;
        const theme = foundUser.theme;
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
         console.log('new mongo user field with refToken from authCont', updatedUser)

        // Creates Secure Cookie with refresh token      *** SameSite = 'none, 'secure' ??
        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken, username, email, bird, id, theme });

    } else {
        res.sendStatus(401);
    }

}

module.exports = { handleLogin, editLogin };