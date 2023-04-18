const { addProduct, createUser, removeProduct } = require('./mutation')
const { allProducts, loginUser, userProducts, getCard } = require('./query')
const { products } = require('./field')

const resolvers = {
  Query: {
    allProducts,
    loginUser,
    userProducts,
    getCard,
  },
  Cart: {
    products
  },
  Mutation: {
    addProduct,
    createUser,
    removeProduct
  },
}
module.exports = resolvers