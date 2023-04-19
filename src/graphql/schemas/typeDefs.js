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
    type Cart{
      products: [Product]!
    }
    type Query {
      allProducts: [Product]
      loginUser(username: String!, password: String!): User
      userProducts(userId: Int!): Cart
    }
    type Mutation {
      createUser(username: String!, password: String!): User
      addProduct(userId: Int!, productId: Int!): Product
      removeProduct(userId: Int!, productId: Int!): Product
    }
`;
module.exports = typeDefs;