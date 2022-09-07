const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const BabelUserModel = require('../models/UserModel');
const BabelopsModel = require('../models/openModel');


// login user and get / post user authentificaations 
const getUserLogin = async (req, res) => {

    const email = req.body.email
    const query = {
        email: email
        }
    const user = await BabelUserModel.findOne(query)
 
    if (!user) {
        return res.json({status: 'err', user: false})
    } 

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    ) 
    if (isPasswordValid) {
    const token = jwt.sign({
        name: user.username,
        email: user.email
    }, 'supersecuresecretkey')

    return res.json({status: 'ok', user: token, userinfo: user})
    } else {
    return res.json({status: 'err', user: false})
    }
};
const getUserAuth = async (req, res) => {
    console.log('get userauth fired')
    const token = req.headers['x-access-token']
    console.log('getuserauth fired with header', token)

    try {
        const decoded = jwt.verify(token, 'supersecuresecretkey')
        const email = decoded.email
        const user = await BabelUserModel.findOne({email: email})
        return res.json({ status: 'ok', quote: user })

    } catch (err) {
        res.json({ status: 'err', err: 'invalid token' })
    }
};
const postUserAuth = async (req, res) => {

    const token = req.headers['x-access-token']

    try {
        const decoded = jwt.verify(token, 'supersecuresecretkey')
        const email = decoded.email
        await BabelUserModel.updateOne(
            { email: email },
            { $set: { quote: req.body.quote } }
        )
        return res.json({ status: 'ok' })

    } catch (err) {
        console.log(err)
        res.json({ status: 'err', err: 'invalid token' })
    }
};




const getUserNav = async (req, res) => {

    const nav = await BabelopsModel.find({});
    console.log(nav, 'usernav')
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
const getDeet = async (req, res)=>{
    const {title} = req.params
    console.log(title, 'from deet')
    const query = {
        bodyhead: title
    }
    const nav = await BabelopsModel.find(query);
    // try 
    // const griddeets = { bodydeetH: nav.bodydeetH,
    //                     bodydeetB: nav.bodydeetB
    //                     className: nav.className
    //                      }
    // res.status(200).json(griddets)
    res.status(200).json(nav);
    console.log(nav)
}

module.exports = { getUserLogin, getUserNav, getBox, getDeet, getUserAuth, postUserAuth };
