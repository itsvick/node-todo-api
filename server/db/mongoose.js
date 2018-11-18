const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/TodoApp')
    .then(() => {
        console.log('database connected');
    })
    .catch(() => {
        console.log('Unable to connect to DB');
    });
// 'mongodb://vivek-kasture:vivek555@ds211694.mlab.com:11694/todoapp'
module.exports = {
    mongoose
}