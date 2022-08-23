const jwt = require('jsonwebtoken')
const BabelUserModel = require('../models/UserModel');


const getUserLogin = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    
    const query = {
        email: email,
        password: password
    }
    console.log(query, 'query item in getuserlogin')
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


module.exports = { getUserLogin };
