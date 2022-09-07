const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');


const createBabelUser = async (req, res) => {

    console.log('add babel user')
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const role = req.body.ability
        const arr = ["early-bird", "kiwi-bird", "bird-twitter", "egyptian-bird", "gi-bird", "nest-bird"]
        const adarr = "crow"
        if (arr.includes(role)) {
            console.log('role set to user')
            const ability = 2001;

            await BabelUserModel.create({
                username: req.body.username,
                email:req.body.email,
                password: newPassword,
                ability: ability
            })
            res.json({status: 'ok'})
        }
        if (adarr.includes(role)) {
            console.log('role sset to admin')
            const ability = 1984;
            await BabelUserModel.create({
                username: req.body.username,
                email: req.body.email,
                password: newPassword,
                ability: ability
            }) 
            console.log(BabelUserModel, 'res from create babel user controller')
            res.json({ status: 'ok' })
        }
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