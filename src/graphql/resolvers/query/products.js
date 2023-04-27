module.exports = { 
  Query: {
    allProducts: async (_, __, { knex }) => {
      return await knex('products');
    },
    userProducts: async (_, { user }, { knex }) => {
      return await knex('user_products').first('user').where({ user });
    }
  }
};
