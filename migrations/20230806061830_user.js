exports.up = async function (knex) {
    await knex.schema.createTable('u_user', function (table) {
        //pk
        table.increments('user_id').primary();

        table.string('user_username', 46);
        table.string('user_first_name', 46);
        table.string('user_last_name', 46);
        table.string('user_email');
        table.string('user_mobile_number', 13);
        table.string('user_password');
        table.string('user_gender', 1);
        table.datetime('created_at').defaultTo(knex.fn.now());
        table.datetime('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTable('u_user');
};
