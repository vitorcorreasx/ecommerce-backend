module.exports = {
  async get(userId, knex){
    return await knex('user_products')
                .join('products', 'products.id', 'user_products.product')
                .select('products.title', 'products.id','products.price','user_products.amount')
                .where('user', userId)
 },
  async addProduct({userId, productId}, knex){
    const products = await knex('user_products').where({user: userId, product: productId})
    if(products != ''){
      await knex('user_products').where({user: userId, product: productId}).increment('amount', 1)
      return
    }
      await knex('user_products').insert({user: userId, product: productId, amount: 1})
  },
  async removeProduct({userId, productId}, knex) {
    await knex('user_products').where({user: userId, product: productId}).decrement('amount', 1)
    await knex('user_products').where({user: userId, product: productId, amount: 0}).del()
  }
}