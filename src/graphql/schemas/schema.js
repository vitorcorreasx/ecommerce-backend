const { resolvers } = require('./merges/mergeResolvers');
const { typeDefs } = require('./merges/mergeTypeDefs');
const { mergeSchemas } = require('@graphql-tools/schema');

const schema = mergeSchemas({typeDefs, resolvers});

module.exports = { schema };