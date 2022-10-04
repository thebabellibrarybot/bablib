const BabelUserModel = require('../models/UserModel');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const handleNewUser = async (req, res) => {
    
    try {
        const email = req.body.email
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const role = req.body.ability
        const arr = ["early-bird", "kiwi-bird", "bird-twitter", "egyptian-bird", "gi-bird", "nest-bird"]
        const adarr = "crow"

        // add user by role
        console.log(email, 'email')
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
            console.log(BabelUserModel, 'res from create handlenewuser controller')
            res.json({ status: 'ok' })
        }

    } catch (err) {
        
    }
}

module.exports = { handleNewUser };