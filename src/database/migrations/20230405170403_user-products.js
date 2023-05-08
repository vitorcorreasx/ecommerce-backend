exports.up = function(knex) {
  return knex.schema.createTable('user_products', (table) => {
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('users.id').deferrable('deferred');
    table.integer('product_id').unsigned();
    table.foreign('product_id').references('products.id').deferrable('deferred');
    table.integer('amount').notNullable;
    table.decimal('total').notNullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user_products');
};
