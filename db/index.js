const { connect } = require('mongoose');
const mongodb = require('mongodb');

// create a new MongoClient
const MongoClient = require('mongodb').MongoClient;
// congifure global url
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017'
// database name
const DB_NAME = 'swimbikerun'

const COLLECTIONS = {
    USERS: 'users',
    TIPS: 'tips',
}

const client = new MongoClient(MONGO_URL,
    {
        useUnifiedTopology: true
    }
);

module.exports = {
    async connect(){
        const connection = await client.connect();
        console.log('Connect to MongoDB');
        const db = connection.db(DB_NAME);
        this.users = db.collection(COLLECTIONS.USERS);
        this.movies = db.collection(COLLECTIONS.TIPS);
    },
    disconnect(){
        return client.close();
    },
};