const UserController = require('../../../controllers/userController');

const createUser = async (_, args, { knex, bcrypt }) => {
  return await UserController.create(args, { knex, bcrypt });
};
module.exports = { createUser };