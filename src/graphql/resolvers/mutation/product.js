module.exports = {
  Mutation: {
    addUserProduct: async (_, { userId, input}, {knex}) => {
      if(await knex('user_products').where({user_id: userId, product_id: input[0].id}) == '') {
        return await knex('user_products').insert({
          user_id: userId,
          product_id: input[0].id,
          amount: input[0].amount,
          total: input[0].total
        });
      }
      await knex('user_products').where({user_id: userId, product_id: input[0].id}).increment('amount', 1);
    },
    updateUserProducts: async (_, { userId, input}, {knex}) => {
      input.forEach(async (item) => {
        await knex('user_products').where({user_id: userId, product_id: item.id, amount: 0}).del();
        await knex('user_products').where({user_id: userId, product_id: item.id}).update({amount: item.amount, total: item.total});
      });
      return await knex('users').first('id').where({id: userId});
    }
  }
};