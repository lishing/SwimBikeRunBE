// Dependencies
const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 4000;
require('./db');
const app = express();
const mongoURI = 'mongodb+srv://LiShing:*8B8vxo9@swimbikerun.mwv15.azure.mongodb.net/test?authSource=admin&replicaSet=atlas-18ukyn-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'
const frontEndUrl = process.env.Front_End_URL || 'https://localhost:3000'
// //connect to Mongo via mongoose
// mongoose.connect(
//     mongoURI,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },
//     () => console.log('MongoDB connected')
// );

// middleware
app.use(express.json()); // returns middleware that only parses JSON
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", frontEndUrl);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, x-access-token, Cookie, Content-Type, access_token, Accept");
    next();
});
require('./routes')(app);

app.listen(PORT, () =>{
    console.log('SwimBikeRun listening on port', PORT)
})