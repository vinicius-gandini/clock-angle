import { Knex } from 'knex';
import { PostgreConnection } from '../connection';

export class BaseRepository {
  knex: Knex;

  constructor() {
    this.knex = PostgreConnection.getInstance().connection!;
  }
}
