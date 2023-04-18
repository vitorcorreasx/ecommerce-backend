const CardController = require('../../../controllers/cardController')

const getCard = async (_, cardInfos, { knex }) => {
  return await CardController.get(cardInfos, knex)
}
module.exports = { getCard }