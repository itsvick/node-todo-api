const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://vivek-kasture:vivek555@ds211694.mlab.com:11694/todoapp'  || 'mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose
}