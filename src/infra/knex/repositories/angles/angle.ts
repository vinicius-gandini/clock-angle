import { Knex } from 'knex';
import { injectable } from 'tsyringe';
import { BaseRepository } from '../base';
import { Angle, AngleTable } from '@/domain/entities/angle';

@injectable()
export class BaseAngleRepository extends BaseRepository {
  table = AngleTable.table;

  angleAlreadySearched = async (hour: number, minute: number): Promise<any> => {
    const angle = await this.knex(this.table)
      .select()
      .where({ hour, minute })
      .first();

    return angle;
  };
}
