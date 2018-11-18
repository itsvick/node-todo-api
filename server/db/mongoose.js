const mongoose = require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config();

mongoose.Promise = global.Promise;
console.log('process.env.MONGODB', process.env.MONGODB);

mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log('database connected');
    })
    .catch((error) => {
        console.log('Unable to connect to DB', error);
    });
// 'mongodb://vivek-kasture:vivek555@ds211694.mlab.com:11694/todoapp'
module.exports = {
    mongoose
}