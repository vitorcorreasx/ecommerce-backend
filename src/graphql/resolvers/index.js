const { addProduct, createUser, removeProduct } = require('./mutation');
const { allProducts, loginUser, userProducts } = require('./query');
const { products } = require('./field');

const resolvers = {
  Query: {
    allProducts,
    loginUser,
    userProducts,
  },
  Cart: {
    products
  },
  Mutation: {
    addProduct,
    createUser,
    removeProduct
  },
};
module.exports = resolvers;