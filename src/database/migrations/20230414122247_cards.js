exports.up = function(knex) {
  return knex.schema.createTable('cards', (table) => {
    table.bigInteger('number_card', 16).notNullable;
    table.bigInteger('cpf', 11).notNullable;
    table.string('name').notNullable;
    table.decimal('balance').notNullable;
    table.integer('security_code').notNullable;
    table.date('validate').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cards');
};
