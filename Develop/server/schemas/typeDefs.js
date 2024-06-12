const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    Link: String
    title: String
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

input BookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    Link: String
    title: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: BookInput ): User
    removeBook(bookId: ID!): User
  }  
`

module.exports = typeDefs