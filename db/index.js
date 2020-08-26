// const { connect } = require('mongoose');
// const mongodb = require('mongodb');

// // create a new MongoClient
// const MongoClient = require('mongodb').MongoClient;
// // congifure global url
// const MONGO_URL = process.env.MONGODB_URI || 'mongodb+srv://LiShing:*8B8vxo9@swimbikerun.mwv15.azure.mongodb.net/test?authSource=admin&replicaSet=atlas-18ukyn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
// // database name
// const DB_NAME = 'swimbikerun'

// const COLLECTIONS = {
//     USERS: 'users',
//     TIPS: 'tips',
// }

// const client = new MongoClient(MONGO_URL,
//     {
//         useUnifiedTopology: true
//     }
// );

// module.exports = {
//     async connect(){
//         const connection = await client.connect();
//         const db = connection.db(DB_NAME);
//         this.users = db.collection(COLLECTIONS.USERS);
//         this.movies = db.collection(COLLECTIONS.TIPS);
//         console.log('Connect to MongoDB', MONGO_URL);
//     },
//     disconnect(){
//         return client.close();
//     },
// };

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://LiShing:*8B8vxo9@swimbikerun.mwv15.azure.mongodb.net/swimbikerun?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
.once('open', () => {
    console.log('Connected to Mongo: ' + MONGODB_URI);
}).on('error', err => {
    console.log(err.message + ' is Mongo not running?')
}).on('disconnected', err => {
    console.log(err.message + ' is Mongo disconnected?')
});