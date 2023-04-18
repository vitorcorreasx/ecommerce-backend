const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
      id: Int!
      title: String!
      price: Float!
      amount: Int!
      total: Float!
    }
    type User {
      id: Int!
      username: String!
      password: String!
    }
    type Card {
      number: String!
      cpf: String!
      name: String!
      balance: Float!
      security_code: Int!
    }
    type Cart{
      products: [Product!]
    }
    input CardInput {
      number: String!
      cpf: String!
      name: String!
      security_code: Int!
    }

    type Query {
      allProducts: [Product]
      loginUser(username: String!, password: String!): User
      userProducts(userId: Int!): Cart
      getCard(cardInfos: CardInput): Card
    }
    type Mutation {
      createUser(username: String!, password: String!): User
      addProduct(userId: Int!, productId: Int!): Product
      removeProduct(userId: Int!, productId: Int!): Product
    }
    
`
module.exports = typeDefs