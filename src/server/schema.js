const { resolvers } = require('./buildResolvers');
const { typeDefs } = require('./buildTypeDefs');
const { mergeSchemas } = require('@graphql-tools/schema');

const schema = mergeSchemas({typeDefs, resolvers});

module.exports = { schema };