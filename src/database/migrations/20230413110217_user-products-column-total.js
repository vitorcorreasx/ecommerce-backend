exports.up = function(knex) {
  return knex.schema.alterTable('user_products', (table) => {
    table.decimal('total').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('user_products', (table) => {
    table.integer('user').notNullable;
    table.integer('product').notNullable;
    table.integer('amount').notNullable;
  });
};
