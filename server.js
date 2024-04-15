import { ApolloServer, gql } from "apollo-server";
import crypto from "crypto";

const users = [
  {
    id: "hgfdchdeb",
    firstname: "John",
    lastname: "Doe",
    qualification: "Bachelor's in Computer Science",
  },
  {
    id: "fnehbuhbe",
    firstname: "Alice",
    lastname: "Smith",
    qualification: "Master's in Business Administration",
  },
  {
    id: "buecnxnne9uc",
    firstname: "Bob",
    lastname: "Johnson",
    qualification: "Bachelor's in Mechanical Engineering",
  },
];
// console.log(crypto.randomUUID()) create random texts

// users is what the client request and  [User] is the return type in form of array

const books = [
  {name: "hunters",sold_to: "buecnxnne9uc" },
  { name: "cat", sold_to: "fnehbuhbe" },
  { name: "lion", sold_to: "hgfdchdeb" },
];

const typeDefs = gql`
  input Userinput {
    firstname: String!
    lastname: String!
    qualification: String!
  }

  input editedinput {
    firstname: String
    lastname: String
    qualification: String
  }

  type Mutation {
    createuser(adduser: Userinput!): User
    deleteuser(id: ID!): String
    edituser(id: ID!): User
  }
  type Query {
    users: [User]
    greet: String
    user(id: ID!): User
  }
  type User {
    id: ID
    firstname: String
    lastname: String
    qualification: String
    book:[Books]
  }
  type Books{
    name:String
    sold_to:String
  }
`;

const resolvers = {
  Query: {
    greet: () =>"yg",
    users: () => users,
    user: (parent, { id }, context) => {
      console.log(id);
      console.log(users.find((item) => item.id == id));
      return users.find((item) => item.id == id);
    },
  },

  User:{
book:(parent)=>{ return books.filter((item)=>item.sold_to==parent.id)}

  },

  Mutation: {
    createuser: (_, { adduser },{fromcontext}) => {
      const newuser = {
        id: crypto.randomUUID(),
        ...adduser,
      };

      users.push(newuser);
      console.log(`${fromcontext}${newuser.firstname}`) 
      return newuser;
    },
    deleteuser: (parent, { id }, context) => {
      console.log(id);
      users.map((item) => {
        if (item.id === id) {
          users.pop(item);
        }
      });
      return "deleted success";
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers,context:{
  fromcontext:"hi"
}});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at: ${url}`);
});
