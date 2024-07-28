const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;


//Connectivity to Online Moongose
mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected...')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })