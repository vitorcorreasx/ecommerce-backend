const { join } = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');

const buildResolvers = loadFilesSync(join(__dirname, '../resolvers/**/*.js'));
const resolvers = mergeResolvers(buildResolvers);

module.exports = {resolvers};