module.exports = {
  async get(user, knex){
    return await knex('user_products').first('user').where('user', user);
  },
  async addProduct({userId, productId}, knex){
    await knex('user_products').where({user: userId, product: productId}).increment('amount', 1);
    const {price} = await knex('products').where({id: productId}).first('price') ;
    const {amount} = await knex('user_products').where({user: userId, product: productId}).first('amount');
    await knex('user_products').where({user: userId, product: productId}).update('total', price * amount);
    return await knex('user_products').first('user').where({user: userId});
  },
  async removeProduct({userId, productId}, knex) {
    await knex('user_products').where({user: userId, product: productId}).decrement('amount', 1);
    await knex('user_products').where({user: userId, product: productId, amount: 0}).del();
    const {price} = await knex('products').where({id: productId}).first('price') ;
    const {amount} = await knex('user_products').where({user: userId, product: productId}).first('amount');
    await knex('user_products').where({user: userId, product: productId}).update('total', price * amount);
    
    return await knex('user_products').first('user').where({user: userId});
  }
};