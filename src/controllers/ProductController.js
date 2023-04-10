module.exports = {
  async get(userId, knex){
    const res = await knex('user_products')
    .join('products', 'products.id', 'user_products.product')
    .select('products.title', 'products.id','products.price','user_products.amount')
    .where('user', userId)
    return res
 },
  async addProduct({userId, productId}, knex){
    const products = await knex('user_products').where({user: userId, product: productId})
    if(products != ''){
      const [{amount}] = await knex('user_products').column('amount').where({user: userId, product: productId})
      await knex('user_products').where({user: userId, product: productId}).update('amount', amount + 1)
      return
    }
      await knex('user_products').insert({user: userId, product: productId, amount: 1})
  },
  async removeProduct({userId, productId}, knex) {
    const [{amount}] = await knex('user_products').column('amount').where({user: userId, product: productId})
    await knex('user_products').where({user: userId, product: productId}).update('amount', amount - 1)
    if(amount == 1){
      await knex('user_products').where({user: userId, product: productId}).del()
    }
  }
}