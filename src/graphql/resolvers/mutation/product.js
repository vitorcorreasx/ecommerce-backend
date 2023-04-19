const ProductController = require('../../../controllers/productController');

module.exports = {
  Mutation: {
    addProduct: async (_, { userId, productId }, { knex }) => {
      return await ProductController.addProduct({ userId, productId }, knex);
    },
    removeProduct: async (_, { userId, productId }, { knex }) => {
      return await ProductController.removeProduct({ userId, productId }, knex);
    }
  }
};

