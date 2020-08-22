const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    age: Number,
    sex: String,
    contact: String,
    departmentID: String,
});

module.exports = mongoose.model('Person', personSchema);