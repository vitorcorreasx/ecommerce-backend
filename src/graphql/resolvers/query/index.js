const { loginUser } = require('./auth');
const { allProducts, userProducts } = require('./products');
const { getCard } = require('./card');

module.exports = { loginUser, allProducts, userProducts, getCard };
