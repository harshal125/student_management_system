const knex = require("knex");

/**
 * @param {knex} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable("exam_submission", async (table) => {
    table.increments("id");
    table.string("exam_id");
    table.text("mcqs");
    table.text("slected_options");
    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(knex.fn.now());
    //TODO -
    // create_at and other default fields
    // Add a sync number which is a auto increment value so every sync has a identifier
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("exam_submission");
};
