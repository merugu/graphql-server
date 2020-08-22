# graphql-nodejs

#sample queries

get membership details by membership id
{
  membership(membershipID: 1) {
    person {
      pid
      name
      sex
      age
      contact {
        contactNumber
        contactType
      }
    }
    membershipType {
      membershipTypeID
      membershipTypeName
    }
  }
}

// get all available membership types

{
  membershipTypes{
    membershipTypeID
    membershipTypeName
  }
}

//get all memberships

{
  memberships {
    membershipID
    membershipTypeID 
    person {
      name
    }
  }
}
