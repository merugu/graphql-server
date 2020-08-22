const persons = [
    {pid: '1', name: 'Amit', age: 34, sex: 'male'},
    {pid: '2', name: 'Ajit', age: 32, sex: 'male' },
    {pid: '3', name: 'Tara', age: 55, sex: 'female' },
    {pid: '4', name: 'Jay', age: 36, sex: 'female'},
];

const membershipTypes = [
    {membershipTypeID: '1', membershipTypeName: 'premium'},
    {membershipTypeID: '2', membershipTypeName: 'standard'},
];

const memberships = [
    {membershipID: '1', membershipTypeID: '1', pid: '4'},
    {membershipID: '2', membershipTypeID: '1', pid: '3'},
    {membershipID: '3', membershipTypeID: '1', pid: '2'},
    {membershipID: '4', membershipTypeID: '2', pid: '1'},
];

const contacts = [
    {contactID: '1', contactType: 'HOME', contactNumber: '1234', pid: '1'},
    {contactID: '2', contactType: 'CELL', contactNumber: '4567', pid: '1'},
    {contactID: '3', contactType: 'HOME', contactNumber: '8910', pid: '2'},
    {contactID: '4', contactType: 'CELL', contactNumber: '1113', pid: '2'},
    {contactID: '5', contactType: 'HOME', contactNumber: '1314', pid: '3'},
    {contactID: '6', contactType: 'CELL', contactNumber: '1516', pid: '3'},
    {contactID: '7', contactType: 'CELL', contactNumber: '1718', pid: '4'},
];

module.exports = {persons , memberships, membershipTypes, contacts};