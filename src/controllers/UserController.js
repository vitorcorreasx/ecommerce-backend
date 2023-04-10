const { hash, compare } = require('bcrypt') 

module.exports = {
  async create({username, password}, knex){
      const [checkUser] = await knex('users').where({username: username})
      const hashedPassword = await hash(password, 10)

      if(!checkUser){
        await knex('users').insert({
          username: username,
          password: hashedPassword
        })
        return this.login({
          username: username,
          password: password
        }, knex)
      }  
  },
  async login({username, password}, knex){
    const [validUser] = await knex('users').where({
      username: username
    }).select('password')
    const hashPass = await compare(password, validUser.password)
    if(hashPass){
      const [result] = await knex('users').where({ username: username }).select('id')
      return result
    }
  },
}