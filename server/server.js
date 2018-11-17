const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then((doc) => {
            console.log('Result', doc);
            res.send(doc);
        })
        .catch((error) => {
            res.status(400).send(error);
            console.log('Unable to save todo', error);

        });
    console.log(req.body);

});

app.listen(3000, () => {
    console.log('Started on port 30000');

});