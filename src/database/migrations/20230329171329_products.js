exports.up = function(knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id');
    table.string('title').notNullable;
    table.decimal('price').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
