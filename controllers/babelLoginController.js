const jwt = require('jsonwebtoken')
const BabelUserModel = require('../models/UserModel');
const BabelopsModel = require('../models/openModel');

const getUserLogin = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    const query = {
        email: email,
        password: password
    }
    const user = await BabelUserModel.find(query)
    console.log(user, 'res user from getUserLogin')
 
    if (user.length > 0) {

        const token = jwt.sign({
            name: user.username,
            email: user.email
        }, 'supersecuresecretkey')

        console.log('returned')
        return res.json({status: 'ok', user: token, userinfo: user})

    } else {
        console.log('not returned')
        return res.json({status: 'err', user: false})
    }
};

const getUserNav = async (req, res) => {

    const nav = await BabelopsModel.find({});
    res.status(200).json(nav)

}

const getBox = async (req, res)=>{

    const {title} = req.params
    console.log(title, 'from ')
    const query = {
        title: title
    }
    const nav = await BabelopsModel.find(query);
    res.status(200).json(nav);


}


module.exports = { getUserLogin, getUserNav, getBox };
