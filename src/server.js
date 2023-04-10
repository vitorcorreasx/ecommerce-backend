const { ApolloServer } = require('apollo-server');
const database = require('./database');
require('dotenv').config()
const UserController = require('./controllers/UserController')
const ProductController = require('./controllers/ProductController')

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
    async allProducts(_, args, {database}){
      return await database('products')
    },
    async loginUser(_, args, {database}){
      return await UserController.login(args, database)
    },
    async userProducts(_, {userId}, {database}){
      return await ProductController.get(userId, database)
    }
  },
  Cart:{
    async products(parents){
      return parents
    }
  },
  Mutation: {
    async createUser(_, args, {database}){
      return await UserController.create(args, database)
    },
    async addProduct(_, {userId, productId }, {database}){
      return await ProductController.addProduct({userId, productId}, database)
    },
    async removeProduct(_, {userId, productId }, {database}){
      return await ProductController.removeProduct({userId, productId}, database)
    },
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:  () => {
   return {database}
  }
});

server.listen({port: process.env.PORT}).then(({url}) =>{
  console.log(url)
})