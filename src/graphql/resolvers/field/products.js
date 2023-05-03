module.exports = {
  User: {
    products: async({user_id}, _, { knex }) => {
      return await knex('user_products')
        .join('products', 'products.id', 'user_products.product_id').where({user_id});
    },
  }
};