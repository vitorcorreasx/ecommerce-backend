const bcrypt = require('bcrypt');

module.exports = { 
  Query: {
    loginUser: async (_, { username, password }, { knex }) => {
      const validUser = await knex('users').where({username}).first('password');
      const hashPass = await bcrypt.compare(password, validUser.password);
      if(hashPass){
        return await knex('users').where({ username }).first('id');
      }
    },
  },
};