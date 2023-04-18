const UserController = require('../../../controllers/userController');

const loginUser = async (_, args, { knex, bcrypt }) => {
  return await UserController.login(args, { knex, bcrypt });
};
module.exports = { loginUser };