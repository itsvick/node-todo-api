const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || 'mongodb://localhost:27017/TodoApp')
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