const BabelUserModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

const handleNewUser = async (req, res) => {
    
    try {
        const email = req.body.email
        const newPassword = await bcrypt.hash(req.body.password, 10)
        const role = req.body.ability
        const arr = ["early-bird", "kiwi-bird", "bird-twitter", "egyptian-bird", "gi-bird", "nest-bird"]
        const adarr = "crow"
        const bird = req.body.ability;

        // add user by role

        if (arr.includes(role)) {

            const ability = 2001;

            await BabelUserModel.create({
                username: req.body.username,
                email:req.body.email,
                password: newPassword,
                ability: ability,
                bird: bird,
                theme: "lightmode default"
            })
            console.log(req.body.username, 'added to reg')
            res.json({status: 'ok'})
        }
        if (adarr.includes(role)) {

            const ability = 1984;
            await BabelUserModel.create({
                username: req.body.username,
                email: req.body.email,
                password: newPassword,
                ability: ability,
                bird: bird
            }) 

            res.json({ status: 'ok' })
        }

    } catch (err) {
        
    }
}



module.exports = { handleNewUser };