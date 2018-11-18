const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('../server/models/todo');

let id = '5bf055b8e4129e1e48b447b0';

Todo.find({ _id: id }).then((todos) => {
    console.log('TODOS', todos);
});

Todo.findOne({ _id: id }).then((todo) => {
    console.log('TODO', todo);
});

Todo.findById(id).then((todo) => {
    console.log('TODO', todo);
});