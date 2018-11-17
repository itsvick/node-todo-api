const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // FindOneAndDelete
    db.collection('Todos').findOneAndUpdate({ _id: new ObjectID('5befec997fdef2c16225e701') },
        {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log('Result', result);
        });

    client.close();
});