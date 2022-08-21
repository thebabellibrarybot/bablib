const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const path = require('path');
//if (process.env.NODE_ENV !== 'production') {
//    require('dotenv').config();
//  }

const babelTombRoutes = require('./routes/babelTombs');
const babelHomeRoute = require('./routes/babelHomeRoute');
const babelBloglsRoute = require('./routes/babelBloglsRoute');
const babelUserRoute = require('./routes/babelUserRoute');

const mongoose = require('mongoose');

const app = express();

const Port = process.env.PORT || 4000
 
console.log(Port, 'port')

// midelware for POST req

//app.use(express.json())
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, 'server msg from port')
    next()
})

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
// route for user register // login
app.use('/register', babelUserRoute);



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


