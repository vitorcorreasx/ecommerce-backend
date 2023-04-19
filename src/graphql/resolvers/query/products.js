const ProductController = require('../../../controllers/productController');

module.exports = { 
  Query: {
    allProducts: async (_, args, { knex }) => {
      return await knex('products');
    },
    userProducts: async (_, { userId }, { knex }) => {
      return await ProductController.get(userId, knex);
    }
  }
};
