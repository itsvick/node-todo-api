const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');
    /*    db.collection('Todos').insertOne({
           text: 'To do something',
           completed: false
       }, (err, result) => {
           if(err) {
               console.log('Unable to insert data');
           }
           console.log(JSON.stringify(result.ops, undefined, 2));
       }); */

    db.collection('Users').insertMany([{
        name: 'abcd',
        age: 20,
        location: 'Pune'
    },
    {
        name: 'pqrs',
        age: 22,
        location: 'Kolhapur'
    }]);
    client.close();
});