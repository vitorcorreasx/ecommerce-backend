module.exports = {
  async get({ cardInfos }, knex) {
    const number = cardInfos.number
    const cpf = cardInfos.cpf
    const name = cardInfos.name
    const cvv = cardInfos.security_code

    return await knex('cards').first('balance')
      .where({ number_card: number, cpf: cpf, name: name, security_code: cvv })
  }
}