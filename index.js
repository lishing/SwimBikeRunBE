// Dependencies
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const app = express();
const db = require('./db');

//connect to Mongo via mongoose
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('MongoDB connected')
);

// middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

require('./routes')(app);

app.listen(PORT, () =>{
    console.log('SwimBikeRun listening on port', PORT)
})