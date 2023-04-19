const UserController = require('../../../controllers/userController');

module.exports = { 
  Query: {
    loginUser: async (_, args, { knex, bcrypt }) => {
      return await UserController.login(args, { knex, bcrypt });
    },
  }
};