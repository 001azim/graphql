import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    test: String
    getusers:[User]
    viewMessages(receiverId:Int!):[Message]
  }
  type User {
    first_name: String
    last_name: String
    email: String
  }
  input UserInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }
  input loginInput {
    email: String!
    password: String!
  }
type Message{
  id : ID!
  text :String!
  receiverId :Int!
  senderId: Int!
    createdAt :String
}
  type Mutation {
    signupUser(UserNew: UserInput!): response
    signinUser(login: loginInput): response
    createMessage(receiverId:Int!,text:String!):Message
  }
  type response {
    token: String
  }
 
`;

export default typeDefs;
