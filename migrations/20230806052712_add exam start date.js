exports.up = async function(knex) {
    await knex.schema.alterTable('exam_list', function(table) {
        table.datetime("exam_start_date");
        table.datetime("exam_end_date");
        table.enu('is_exam_launch', ['Y', 'N']).defaultTo('Y');
        table.enu('exam_active', ['Y', 'N']).defaultTo('Y');
    });
};

exports.down = async function(knex) {
    await knex.schema.alterTable('exam_list', function(table) {
        table.dropColumn("exam_start_date");
        table.dropColumn("exam_end_date");
        table.dropColumn('is_exam_launch', ['Y', 'N']).defaultTo('Y');
        table.dropColumn('exam_active', ['Y', 'N']).defaultTo('Y');
    })
};
