module.exports = {
  async get({ numberCard }, knex) {
    const verify = await knex('cards').first('number_card', 'cpf', 'name', 'security_code', 'balance').where('number_card', numberCard)
    if (verify.number_card == numberCard) {
      console.log(verify.balance)
    }
  }
}