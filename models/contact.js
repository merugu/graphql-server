const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const person

const contactSchema = new Schema({
     contactType: String,
     contactNumber: String
})

module.exports = mongoose.model('Contact', contactSchema);