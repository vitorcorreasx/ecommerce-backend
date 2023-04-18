const ProductController = require('../../../controllers/productController');

const addProduct = async (_, { userId, productId }, { knex }) => {
  return await ProductController.addProduct({ userId, productId }, knex);
};
const removeProduct = async (_, { userId, productId }, { knex }) => {
  return await ProductController.removeProduct({ userId, productId }, knex);
};
module.exports = { addProduct, removeProduct };
