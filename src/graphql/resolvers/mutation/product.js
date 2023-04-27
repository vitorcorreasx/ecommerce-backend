module.exports = {
  Mutation: {
    addProduct: async (_, { user, product }, { knex }) => {
      await knex('user_products').where({user, product}).increment('amount', 1);
      const {price} = await knex('products').where({id: product}).first('price');
      const {amount} = await knex('user_products').where({user, product}).first('amount');
      await knex('user_products').where({user, product}).update('total', price * amount);
      return await knex('user_products').first('user').where({user});
    },
    removeProduct: async (_, { user, product }, { knex }) => {
      await knex('user_products').where({user, product}).decrement('amount', 1);
      await knex('user_products').where({user, product, amount: 0}).del();
      const {price} = await knex('products').where({id: product}).first('price');
      const {amount} = await knex('user_products').where({user, product}).first('amount');
      await knex('user_products').where({user, product}).update('total', price * amount);
      
      return await knex('user_products').first('user', 'total').where({user});
    }
  }
};

