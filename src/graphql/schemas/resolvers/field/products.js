module.exports = {
  User: {
    products: ({user_id}, _, { knex }) => {
      return knex('user_products')
        .join('products', 'products.id', 'user_products.product_id').where({user_id});
    },
  }
};