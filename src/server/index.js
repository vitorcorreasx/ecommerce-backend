const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const { schema } = require('../server/schema');
const { context } = require('../context');

const server = new ApolloServer({
  schema,
  context
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(url);
});