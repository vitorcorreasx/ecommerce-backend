const bcrypt = require('bcrypt');

module.exports = {
  async create({username, password}, {knex}){
    const checkUser = await knex('users').first('username').where({username});
    const hashedPassword = await bcrypt.hash(password, 10);

    if(!checkUser){
      await knex('users').insert({
        username,
        password: hashedPassword
      });
      return await knex('users').first('id').where({username});
    }
  },
  async login({username, password}, {knex}){
    const validUser = await knex('users').first('username').where({username}).select('password');
    const hashPass = await bcrypt.compare(password, validUser.password);
    if(hashPass){
      return await knex('users').first('username').where({ username }).select('id');
    }
  },
};