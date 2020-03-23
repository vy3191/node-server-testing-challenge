
exports.up = async function(knex) {
	await knex.schema.createTable("cars", (table) => {
		table.increments()
    table.text("make").notNullable().unique();
    table.text("modal").notNullable();
    table.text('year').notNullable();
	})
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('cars');
};
