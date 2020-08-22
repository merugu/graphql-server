const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schemas/schema')
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

//allow cross-origin request

app.use(cors())

//The below connection url you can get from the free account created online here
//https://mlab.com/
mongoose.connect("pass your mongodb connection url here")
mongoose.connection.once('open', () => {
    console.log('DB connection established');
})

// The below line we are linking rest-endpoint with graphql middleware
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Hello I'm running on port 4000")
})