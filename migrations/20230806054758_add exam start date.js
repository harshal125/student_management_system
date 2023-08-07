exports.up = async function(knex) {
    await knex.schema.alterTable('exam_list', function(table) {
        table.increments('id').alter();
    });
};

exports.down = async function(knex) {
   
};
