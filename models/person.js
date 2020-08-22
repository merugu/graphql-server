const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
     pid: Integer,
     name: String,
     age: Integer,
     sex: String
})

module.exports = mongoose.model('Person', personSchema);