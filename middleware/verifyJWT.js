const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    
    const authHeader = req.headers.authorization || req.header.Authorization;
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader, 'authheader from verify JWT')
    const token = authHeader.split(' ')[1];
    console.log(token, 'token')
    jwt.verify(
        token, 
        'supersecretAcessToken',
        (err, decoded) => {
            if (err) 
            {
                console.log(err, 'err from verification')
                return res.sendStatus(403);
            }
            else 
            console.log(decoded, 'decoded')
            req.user = decoded.UserInfo.username
            req.roles = decoded.UserInfo.roles

            next();
        }
    )
}
module.exports = verifyJWT;
