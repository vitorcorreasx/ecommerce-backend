module.exports = {
  Mutation: {
    addUserProduct: async (_, { userId, input}, {knex}) => {
      const res = await knex('user_products').first('user_id').where({user_id: userId});
      if(await knex('user_products').where({user_id: userId, product_id: input[0].id}) == '') {
        await knex('user_products').insert({
          user_id: userId,
          product_id: input[0].id,
          amount: input[0].amount,
          total: input[0].total
        });
        return res;
      }
      await knex('user_products').where({user_id: userId, product_id: input[0].id}).increment('amount', 1);
      return res;
    },
    updateUserProducts: async (_, { userId, input}, {knex}) => {
      input.forEach(async (item) => {
        await knex('user_products').where({user_id: userId, product_id: item.id, amount: 0}).del();
        await knex('user_products').where({user_id: userId, product_id: item.id}).update({amount: item.amount, total: item.total});
      });
      return await knex('user_products').first('user_id').where({user_id: userId});
    }
  }
};