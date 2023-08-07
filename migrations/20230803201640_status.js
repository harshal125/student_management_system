const knex = require("knex");

/**
 * @param {knex} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable("s_student_list", async (table) => {
    table.increments("id");
    table.string("first_name");
    table.string("last_name");
    table.string("gender");
    table.string("age");
    table.text("class");
    table.text("division");
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
    //TODO -
    // create_at and other default fields
    // Add a sync number which is a auto increment value so every sync has a identifier
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("vista_movies");
};
