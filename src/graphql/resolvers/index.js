const { addProduct, createUser, removeProduct } = require('./mutation')
const { allProducts, getCard, loginUser, userProducts, verifyCard } = require('./query')
const { products } = require('./field')

const resolvers = {
  Query: {
    allProducts,
    getCard,
    loginUser,
    userProducts,
    verifyCard
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