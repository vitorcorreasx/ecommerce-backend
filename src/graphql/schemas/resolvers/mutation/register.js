const bcrypt = require('bcrypt');

module.exports = { 
  Mutation: {
    createUser: async (_, {username, password}, { knex }) => {
      const checkUser = await knex('users').first('username').where({username});
      const hashedPassword = await bcrypt.hash(password, 10);

      if(!checkUser){
        await knex('users').insert({
          username,
          password: hashedPassword
        });
        return await knex('users').where({username}).first('id', 'username');
      }
    }
  }
};


