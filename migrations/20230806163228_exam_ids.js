exports.up = async function(knex) {
    await knex.schema.alterTable('exam_submission', function(table) {
        table.string("student_id");
    });
};

exports.down = async function(knex) {

};
