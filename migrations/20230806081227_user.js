exports.up = async function(knex) {
    await knex.schema.alterTable('exam_mcq', function(table) {
        table.string("right_mcq");
    });
};

exports.down = async function(knex) {

};
