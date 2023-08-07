exports.up = async function(knex) {
    await knex.schema.alterTable('exam_mcq', function(table) {
        table.string("mcq_mark");
    });
};

exports.down = async function(knex) {

};
