const verifyRoles = (...allowedRoles) => {

    console.log('verifying roles in verify roles')

    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401, 'res from verify roles: no roles')
        const rolesArray = [...allowedRoles]
     

        // mk a better statement for checking if value is in array or not !!!
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);
        
        console.log(rolesArray)
        console.log(req.roles)
        if (!result) return res.sendStatus(401);
        next();

    }
}
module.exports = verifyRoles;