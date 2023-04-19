const UserController = require('../../../controllers/userController');

module.exports = { 
  Mutation: {
    createUser: async (_, args, { knex, bcrypt }) => {
      return await UserController.create(args, { knex, bcrypt });
    }
  }
};


