const graphql = require('graphql');
const Person = require('../models/person');
const Department = require('../models/department');

const _ = require('lodash');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;


const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        sex: { type: GraphQLString },
        contact: { type: GraphQLString },
        department: {
            type: DepartmentType,
            resolve(parent, args){
                return Department.findById(parent.departmentID); 
            }
        }
    })
});

const DepartmentType = new GraphQLObjectType({
    name: 'Department',
    fields: () => ({
        id: { type: GraphQLID },
        departmentName: { type: GraphQLString }
    })
});


const query = new GraphQLObjectType({
    name: 'AllQueries',
    fields: {
        person: {
            type: PersonType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Person.findById(args.id);
            }
        },
        department: {
            type: DepartmentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Department.findById(args.id);
            }
        },
        persons: {
            type: new GraphQLList(PersonType),
            resolve(parent, args){
                return Person.find({});
            }
        },
        departments: {
            type: new GraphQLList(DepartmentType),
            resolve(parent, args){
                return Department.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPerson: {
            type: PersonType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
                sex: { type: GraphQLString },
                contact: { type: GraphQLString },
                departmentID: { type: GraphQLString },
            },
            resolve(parent, args){
                let person = new Person({
                    name: args.name,
                    age: args.age,
                    sex: args.sex,
                    contact: args.contact,
                    departmentID: args.departmentID,
                });
                return person.save();
            }
        },
        addDepartment: {
            type: DepartmentType,
            args: {
                departmentName: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args){
                let department = new Department({
                    departmentName: args.departmentName
                });
                return department.save();
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: query,
    mutation: Mutation
})