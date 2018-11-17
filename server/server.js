const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
});

let todoEntry = new Todo({
    text: '            Wake up Early Morning    ',
});

let userEntry = new User({ email: 'test' });
/* todoEntry.save().then((result) => {
    console.log('saved Todo', result);
}, (error) => {
    console.log('Unable to save todo');
});
 */
userEntry.save().then((result) => {
    console.log('saved User', result);
}, (error) => {
    console.log('Unable to save User');
});