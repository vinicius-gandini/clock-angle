import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tbl_angles', (table) => {
    table.increments('id').unique().primary();
    table.integer('hour').notNullable();
    table.integer('minute').notNullable();
    table.integer('angle').notNullable();
    table
      .dateTime('date')
      .notNullable()
      .defaultTo(knex.raw('NOW()'));
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tbl_angles');
}

