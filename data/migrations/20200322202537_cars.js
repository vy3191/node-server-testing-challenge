
exports.up = aysnc function(knex) {
    await knex.schema.createTable('cars', (table) => {
         table.increments('id');
         table.text('modal').notNullable().unique();
         table.text('make').notNullable();
         table.text('year').notNullable();
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars');
};
