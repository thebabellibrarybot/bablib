const BabelUserModel = require('../models/UserModel');



const createBabelUser = async (req, res) => {

    console.log('add babel user')
    try {
        await BabelUserModel.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            ability: req.body.ability
        }) 
        console.log(BabelUserModel, 'res from create babel user controller')
        res.status(200).json(createBabelUser)

    } catch (err) {
        console.log({status: 'err'});
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