const graphql = require('graphql');
const {persons, memberships, membershipTypes, contacts} = require('../staticdata')
const _ = require('lodash');

const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList} = graphql;

const person = new GraphQLObjectType({
 name: 'Person', 
 fields: () => ({
     pid: {type: GraphQLID},
     name: {type: GraphQLString},
     age: {type: GraphQLInt},
     sex: {type: GraphQLString},
     contact: {
         type: new GraphQLList(contact),
         resolve(parent, args){
             console.log(contacts);
             return _.filter(contacts, {pid: parent.pid});
         }
     }
 })
}); 

const contact = new GraphQLObjectType({
    name: 'Contact',
    fields: () => ({
        contactID: {type: GraphQLID},
        contactType: {type: GraphQLString},
        contactNumber: {type: GraphQLString} ,
        pid: {type: GraphQLID}
    })
});

const membershipType = new GraphQLObjectType({
    name: 'MembershipType', 
    fields: () => ({
        membershipTypeID: {type: GraphQLID},
        membershipTypeName: {type: GraphQLString}
    })
   }); 

   const paymentType = new GraphQLObjectType({
    name: 'PaymentType', 
    fields: () => ({
        paymentTypeID: {type: GraphQLID},
        name: {type: GraphQLString}
    })
   }); 

   const billingInfo = new GraphQLObjectType({
    name: 'BillingInfo', 
    fields: () => ({
        billingid: {type: GraphQLID},
        paymentTypeID: {type: GraphQLID},
        pid: {type: GraphQLID}
    })
   }); 

   const membership = new GraphQLObjectType({
    name: 'Membership', 
    fields: () => ({
        membershipID: {type: GraphQLID},
        membershipTypeID: {type: GraphQLID},
        person: {
            type: person,
            resolve(parent, args) {
                console.log(parent);
               return _.find(persons, {pid: parent.pid});
            }
        },
        membershipType: {
            type: membershipType,
            resolve(parent, args) {
                return _.find(membershipTypes, {membershipTypeID: parent.membershipTypeID});
            }
        }
    })
   }); 

   const query = new GraphQLObjectType({
       name: 'AllQueries', 
       fields: {
           person: {
               type: person,
               args: {pid: {type: GraphQLID}},
               resolve(parent, args){
                   return _.find(persons, {pid: args.pid});
               }
           },
           membership: {
               type: membership,
               args: {membershipID: {type: GraphQLID}},
               resolve(parent, args) {
                   return _.find(memberships, {membershipID: args.membershipID});
               }
           },
           membershipTypes: {
               type: new GraphQLList(membershipType), 
               resolve(parent, args) {
                   return membershipTypes
               }
           },
           memberships: {
               type: new GraphQLList(membership),
               resolve(parent, args) {
                   return memberships;
               }
           }
       }
   })

   module.exports = new GraphQLSchema({
       query: query
   })