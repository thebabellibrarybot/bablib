const verifyRoles = (...allowedRoles) => {

    return (req, res, next) => {
        if (!req?.roles) return res.sendStatus(401)
        const rolesArray = [...allowedRoles]
        console.log(rolesArray, 'roles array from verify Roles')
        console.log(req.roles, 'compared to this role from verifyJWT')
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true)
        console.log(result, 'result from verify roles')
        if (!result) return res.sendStatus(401);
        next();
    }

}
module.exports = verifyRoles;