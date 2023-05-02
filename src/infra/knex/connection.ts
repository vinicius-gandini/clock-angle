import knex, { Knex } from 'knex';

import { knexConfig } from './config';

export class PostgreConnection {
  private static instance?: PostgreConnection;

  private knexConnection?: Knex;

  static getInstance(): PostgreConnection {
    if (PostgreConnection.instance === undefined) {
      PostgreConnection.instance = new PostgreConnection();
    }

    return PostgreConnection.instance;
  }

  get connection() {
    return this.knexConnection;
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.knexConnection = knex(knexConfig);

      if (this.knexConnection) {
        this.knexConnection
          .raw('SELECT 1+1 AS RESULT')
          .debug(false)
          .then(() => {
            resolve(console.log('Postgre connected!'));
          })
          .catch((err) => {
            reject(console.error(err));
            process.exit(1);
          });
      }
    });
  }
}
