const mongoose = require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');


const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate } = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        console.log('Find Result', todos);
        res.send({ todos });

    }).catch((error) => {
        console.log('Unable to find', error);
        res.status(400).send(error);
    });
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (ObjectID.isValid(id)) {
        Todo.findById(id)
            .then((todo) => {
                if (todo) {
                    res.send({ todo });
                } else {
                    res.status(404).send();
                }
            })
            .catch((error) => {
                res.status(400).send();
            });
    } else {
        res.status(404).send();
    }
});

app.delete('/todos/:id', (req, res) => {

    console.log("In the delete");
    const id = req.params.id;

    if (ObjectID.isValid(id)) {
        Todo.findByIdAndRemove(id)
            .then((result) => {
                if (!result) {
                    res.status(404).send();
                } else {
                    res.send(result);
                }
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    } else {
        res.status(404).send();
    }
});

app.post('/users', (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({ email, password });

    newUser.save()
        .then(() => {
            console.log('coming here12121');
            // res.send(user);
            return newUser.generateAuthToken();
        }).then((token) => {
            console.log('coming here');

            res.header('x-auth', token).send(newUser);
        })
        .catch((error) => {
            res.status(400).send(error);
        });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.post('/users/login', (req, res) => {
    const { email, password } = req.body;

    User.findByCredentials(email, password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((error) => {
        res.status(400).send();
    });
});

app.delete('/users/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    })
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});