const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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
        // create JWT
        const accessToken = jwt.sign(
            { "username": foundUser.username },
            'ACCESS_TOKEN_SECRET',
            { expiresIn: '1m' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            'REFRESH_TOKEN_SECET',
            { expiresIn: '1d' }
        );
        // add refreshToken to MONGO
        const appendage = { $set: { token: refreshToken }};
        await BabelUserModel.updateOne(query, appendage);

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ accessToken })
    } else {
        res.sendStatus(401).json({"msg from handlelogin": "can't match password"});
    }
}

module.exports = { handleLogin }; 