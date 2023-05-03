import { Knex } from 'knex';

import { knexConfig } from './src/infra/knex/config';

knexConfig.connection = {
  ...(knexConfig.connection as Knex.ConnectionConfigProvider),
  host: 'localhost',
};

export default knexConfig;
