const express = require('express');
const cors = require('cors')
const { ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const corsOptions = require('./config/corsOptions');

// pub routes
const babelTombRoutes = require('./routes/babelTombs');
const babelHomeRoute = require('./routes/babelHomeRoute');
const babelBloglsRoute = require('./routes/babelBloglsRoute');
const babelForUsersRoute = require('./routes/babelForUsersRoute');

const babelRegRoute = require('./routes/babelRegRoute');


//verified routes


const mongoose = require('mongoose');
const app = express();
const Port = process.env.PORT || 4000
console.log(Port, 'port')




//app.use(express.json())
app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, 'server msg from port')
    next()
});
app.use(cookieParser());
app.use(bodyParser.json());



// mongoDB conn
const uri = "mongodb+srv://babeluser:babelpassword@babelcluster.fogf4.mongodb.net/test?retryWrites=true&w=majority"
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





// serve static assests if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clinet', 'build', 'index.html'));
    });
}
//app.use('/', babelHomeRoute);
app.listen(Port, () => {
    console.log(`listening on 4000`)
});


