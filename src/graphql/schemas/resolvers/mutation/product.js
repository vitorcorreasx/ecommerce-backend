module.exports = {
  Mutation: {
    addUserProduct: async (_, { userId, input}, {knex}) => {
      if(await knex('user_products').where({user_id: userId, product_id: input.id}) == '') {
        const [res] =  await knex('user_products').insert({
          user_id: userId,
          product_id: input.productId,
          amount: input.amount,
          total: input.total
        }, ['*']);
        return res;
      }
      const [res] = await knex('user_products').where({user_id: userId, product_id: input.id}).increment('amount', 1).returning('*');
      return res;
    },
    updateUserProducts: async (_, { userId, input}, {knex}) => {
      input.forEach(async (item) => {
        await knex('user_products').where({user_id: userId, product_id: item.id, amount: 0}).del();
        await knex('user_products').where({user_id: userId, product_id: item.id}).update({amount: item.amount, total: item.total});
      });
      return await knex('user_products').where({user_id: userId});
    }
  }
};