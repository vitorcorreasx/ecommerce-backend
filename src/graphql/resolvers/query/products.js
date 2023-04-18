const ProductController = require('../../../controllers/productController');

const allProducts = async (_, args, { knex }) => {
  return await knex('products');
};
const userProducts = async (_, { userId }, { knex }) => {
  return await ProductController.get(userId, knex);
};
module.exports = { allProducts, userProducts };
