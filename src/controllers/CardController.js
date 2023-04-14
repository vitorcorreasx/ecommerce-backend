module.exports = {
  async get({numberCard}, knex){
    return await knex('cards').first('balance','cpf','name','security_code').where('number_card', numberCard)
  },
} 