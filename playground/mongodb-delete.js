const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // DeleteMany
    /*     db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
            console.log('Result', result);
        });
     */

    // DeleteOne
    /*     db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
            console.log('Result', result);
        });
     */
    // FindOneAndDelete
    db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log('Result', result);
    });

    client.close();
});