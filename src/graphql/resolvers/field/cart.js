module.exports = {
  User: {
    products: async({ user }, _, { knex }) => {
      return await knex('user_products')
        .join('products', 'products.id', 'user_products.product').where({user});
    },
  }
};