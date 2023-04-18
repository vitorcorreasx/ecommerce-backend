exports.up = function(knex) {
  return knex.schema.createTable('user_products', (table) => {
    table.integer('user').notNullable;
    table.integer('product').notNullable;
    table.integer('amount').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_products');
};
