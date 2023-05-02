import { Knex } from 'knex';
import path from 'path';

import { env } from '../../main/config';

const { host, port, database, user, password } = env.mysql;

export const knexConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host,
    user,
    password,
    database,
    port,
  },
  pool: {
    min: 2,
    max: 10,
  },
  debug: true,
  migrations: {
    tableName: '@knex_migrations',
    directory: path.resolve(__dirname, 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'seeds'),
  },
};
