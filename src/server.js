const { ApolloServer } = require('apollo-server');
const knex = require('./database');
require('dotenv').config()
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')
const bcrypt = require('bcrypt') 

const typeDefs = `
  type Product {
    id: Int!
    title: String!
    price: Float!
    amount: Int!
  }
  type User {
    id: Int!
    username: String!
    password: String!
  }
  type Cart{
    products: [Product!]
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
`
const resolvers = {
  Query: {
    async allProducts(_, args, {knex}){
      return await knex('products')
    },
    async loginUser(_, args, {knex, bcrypt}){
      return await UserController.login(args, {knex, bcrypt})
    },
    async userProducts(_, {userId}, {knex}){
      return await ProductController.get(userId, knex)
    }
  },
  Cart:{
    async products(parents){
      return parents
    }
  },
  Mutation: {
    async createUser(_, args, {knex, bcrypt}){
      return await UserController.create(args, {knex, bcrypt})
    },
    async addProduct(_, {userId, productId }, {knex}){
      return await ProductController.addProduct({userId, productId}, knex)
    },
    async removeProduct(_, {userId, productId }, {knex}){
      return await ProductController.removeProduct({userId, productId}, knex)
    },
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:  () => {
   return {knex, bcrypt}
  }
});

server.listen({port: process.env.PORT}).then(({url}) =>{
  console.log(url)
})