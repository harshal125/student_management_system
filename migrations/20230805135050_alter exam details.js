exports.up = async function(knex) {
    await knex.schema.alterTable('exam_mcq', function(table) {
        table.string("mcq_one");
        table.string("mcq_two");
        table.string("mcq_three");
        table.string("mcq_four");
        table.enu('mcq_active', ['Y', 'N']).defaultTo('Y');
    });
};

exports.down = async function(knex) {
    await knex.schema.alterTable('exam_mcq', function(table) {
        table.dropColumn("mcq_one");
        table.dropColumn("mcq_two");
        table.dropColumn("mcq_three");
        table.dropColumn("mcq_four");
        table.dropColumn('mcq_active', ['Y', 'N']).defaultTo('Y');
    })
};
