module.exports = { 
  Query: {
    allProducts: async (_, __, { knex }) => {
      return await knex('products');
    },
    userProducts: async (_, { userId }, { knex }) => {
      return await knex('user_products').first('user_id').where({ user_id: userId });
    }
  }
};
