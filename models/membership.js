const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const person

const membershipSchema = new Schema({
     membershipID: Integer
})

module.exports = mongoose.model('Membership', membershipSchema);