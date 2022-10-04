const BabelUserModel = require('../models/UserModel');

const handleLogout = async (req, res) => {

    // on Client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) {return res.sendStatus(204)};// nothing to erase

    // find and clear refreshToken cookie
    const query = {
        token: cookies.refreshToken
    }
    
    const user = await BabelUserModel.findOne(query);
    if (!user) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }
    else {

    // delet refresh token in mongo
    const appendage = { $set: { token: '' } }
    await BabelUserModel.updateOne(query, appendage)
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); //FOR PRODUCTION: secure true - only serves on https
    res.sendStatus(204);
        
    };
}
module.exports = { handleLogout };