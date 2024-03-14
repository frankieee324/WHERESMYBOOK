// Created this type definition based on the models and user-controller files
// Made a typo error on the filename. My tutor helped me identify the typo. 
const typeDefs = `
     type Book {
          bookId: ID!
          authors: [String]
          description: String
          title: String!
          image: String
          link: String
     }
  
     type User {
          _id: ID!
          username: String!
          email: String
          bookCount: Int
          savedBooks: [Book]
     }

     type Auth {
          token: ID!
          user: User
     }
  
     type Query {
          me: User
     }

     type Mutation {
          login(email: String!, password: String!): Auth
          createUser(username: String!, email: String!, password: String!): Auth
          saveBook(bookId: ID!, authors: [String], description: String!, title: String!, image: String, link: String): User
          deleteBook(bookId: ID!): User
     }
`;

module.exports = typeDefs;