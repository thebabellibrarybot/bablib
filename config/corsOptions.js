const allowedOrgins = require('./allowedOrigins');

const corsOptions = {

    origin: (origin, callback) => {
        console.log(origin, 'origin')
        if (allowedOrgins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS', allowedOrgins))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;