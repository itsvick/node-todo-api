const mongoose = require('./../server/db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


Todo.remove({}).then((result) => {
    console.log('Result', result);
}).catch((error) => {
    console.log('Error', error);
});

//Todo.findByIdAndRemove('')