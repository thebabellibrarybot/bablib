const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');


const createBabelUser = async (req, res) => {

    console.log('add babel user')
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)

        await BabelUserModel.create({
            username: req.body.username,
            email: req.body.email,
            password: newPassword,
            ability: req.body.ability
        }) 
        console.log(BabelUserModel, 'res from create babel user controller')
        res.json({ status: 'ok' })

    } catch (err) { 
        console.log({status: 'err from createbabeluser'});
    }

};

/*
const getBabelUser = async (req, res) => {
    console.log('get babel user')

    const babelUser = await BabelUserModel.find({})
    res.status(200).json(babelUser);
}

*/


module.exports = { createBabelUser };





//   for verifying an email address !!!!!!

// https://medium.com/whois-api/how-to-verify-an-email-address-using-node-js-449330a47a7e#:~:text=How%20to%20Verify%20an%20Email%20Address%20Using%20Node.js,Your%20User%20Registration%20Flow%20...%206%20Summary%20