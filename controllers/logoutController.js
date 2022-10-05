const BabelUserModel = require('../models/UserModel');

const handleLogout = async (req, res) => {

    // on Client also delet the accessToken

    console.log('logout fired')
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;
    const query = { "token": refreshToken }

    const foundUser = await BabelUserModel.findOne(query);
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 })
        return res.sendStatus(204)
    }

    // delet refToken in database
    const appendage = { $set: { token: '' } }
    const updatedUser = await BabelUserModel.updateOne(query, appendage)
    console.log(updatedUser, 'from logoutCont');
    res.clearCookie('jwt', { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }) // sercure: true for dev
    res.sendStatus(204);
}

module.exports = { handleLogout };