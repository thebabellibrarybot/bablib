const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    console.log('verify fired')
    const authHeader = req.headers.authorization || req.headers.Authorization;  
    console.log(req.headers,'authHeader from verified')  
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401).json({"msg": "no auth header from verify JWT"});
    console.log('authHeader found in verify JWT');
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        'ACCESS_TOKEN_SECRET',
        (err, decoded) => {
            if (err) return console.log(err, 'err from verify'), res.sendStatus(402).json({"msg": "invalid token from verify JWT"})
            console.log('decoded from verifyJWT')
            console.log(decoded, 'decoded')
            req.email = decoded.UserInfo.email;
            req.roles = decoded.UserInfo.roles;
            next();
        }
    )
}

module.exports = verifyJWT;