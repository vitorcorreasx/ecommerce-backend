const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schemas/typeDefs')
const resolvers = require('./graphql/resolvers')

const knex = require('./database');
require('dotenv').config()

const bcrypt = require('bcrypt')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { knex, bcrypt }
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(url)
})