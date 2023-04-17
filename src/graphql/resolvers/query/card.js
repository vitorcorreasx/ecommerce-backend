const CardController = require('../../../controllers/cardController')

const getCard = async (_, numberCard, { knex }) => {
  return await CardController.get(numberCard, knex)
}
const verifyCard = async (_, numberCard, { knex }) => {
  return await CardController.verification(numberCard, knex)
}
module.exports = { getCard, verifyCard }