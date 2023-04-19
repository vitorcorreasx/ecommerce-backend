const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schemas/typeDefs');
const resolvers = require('./graphql/resolvers');
const { context } = require('./graphql/context');

require('dotenv').config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(url);
});