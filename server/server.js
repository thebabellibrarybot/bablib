const express = require('express');
const cors = require('cors')
const { ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');

// pub routes
const babelTombRoutes = require('./routes/babelTombs');
const babelHomeRoute = require('./routes/babelHomeRoute');
const babelBloglsRoute = require('./routes/babelBloglsRoute');
const babelForUsersRoute = require('./routes/babelForUsersRoute');

// login and auth routes
const babelRegRoute = require('./routes/babelRegRoute');
const authRoute = require('./routes/authRoute');
const refresh = require('./routes/refresh');
const logoutRoute = require('./routes/logoutRoute');

//verified routes
// const verifyJWT = require('./middleware/verifyJWT');
const babelUserhomeRoute = require('./routes/babelUserHomeRoute');


const mongoose = require('mongoose');
const app = express();
const Port = process.env.PORT || 4000
console.log(Port, 'port')




// fetch cookies credentials requirement
app.use(credentials);
// cross origin resource sharing
app.use(cors(corsOptions));
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// expres w/o custom hook
app.use(express.json());
// logger
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, 'server msg from port')
    next()
});
// midleware for cookies
app.use(cookieParser());
// mongoDB conn
const uri = process.env.MONGO_URI 
mongoose.set('strictQuery', false);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('md conn')
})
 


// routes

// get home data
app.use('/home', babelHomeRoute);   
// route for tombs
app.use('/babeltombs', babelTombRoutes);
// route for blogs
app.use('/babelblogls', babelBloglsRoute);
// get forusers or about info
app.use('/babelusers', babelForUsersRoute)


// route for user register 
app.use('/register', babelRegRoute);
// route for user login && info
app.use('/babelauth', authRoute);
// route for refresh token
app.use('/refresh', refresh);
// route for logout
app.use('/logout', logoutRoute);


// route for userspine AKA userDash Pages AKA protected routes
//app.use(verifyJWT);
app.use('/userspine', babelUserhomeRoute); 

app.get('/', (request, response) => {
    response.send("Hello, World!");
  });

// serve static assests if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
// port and clear run statements;
app.listen(Port, () => {
    console.log(`listening on ${Port}`)
});


