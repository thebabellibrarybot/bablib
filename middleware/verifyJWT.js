const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    const authHeader = req.headers.authorization || req.headers.Authorization;    console.log('verify fired')
    if (!authHeader) return res.sendStatus(401).json({"msg": "no auth header from verify JWT"});
    console.log(authHeader, 'authHeader found in verify JWT');
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        'ACCESS_TOKEN_SECRET',
        (err, decoded) => {
            if (err) return res.sendStatus(403).json({"msg": "invalid token from verify JWT"})
            req.email = decoded.email
            next();
        }
    )
}

module.exports = verifyJWT;