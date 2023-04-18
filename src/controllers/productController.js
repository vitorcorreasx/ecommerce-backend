module.exports = {
  async get(userId, knex){
    return await knex('user_products')
      .join('products', 'products.id', 'user_products.product')
      .select('products.title', 'products.id', 'products.price', 'user_products.amount', 'user_products.total')
      .where('user', userId);
  },
  async addProduct({userId, productId}, knex){
    const productPrice = await knex('products').first('price').where({id: productId});
    const productAmount = await knex('user_products').first('amount').where({user: userId, product: productId});

    try {
      const totalPrice = productPrice.price * (productAmount.amount +1);
      await knex('user_products').where({user: userId, product: productId}).increment('amount', 1).update('total', totalPrice); 
      return await knex('user_products').first('amount').where({user: userId, product: productId});
    } 
    catch {
      await knex('user_products').insert({user: userId, product: productId, amount: 1, total: productPrice.price});
      return await knex('user_products').first('amount').where({user: userId, product: productId});
    }
   
  },
  async removeProduct({userId, productId}, knex) {
    const productPrice = await knex('products').first('price').where({id: productId});
    const productAmount = await knex('user_products').first('amount').where({user: userId, product: productId});
    const totalPrice = productPrice.price * (productAmount.amount -1);
    
    await knex('user_products').where({user: userId, product: productId}).decrement('amount', 1).update('total', totalPrice);
    await knex('user_products').where({user: userId, product: productId, amount: 0}).del();
    return await knex('user_products').first('amount').where({user: userId, product: productId});
  }
};