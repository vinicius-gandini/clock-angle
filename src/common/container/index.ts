import { ServiceKeys } from './keys';
import { CalcAngleRepository, SaveAngleRepository } from '@/domain/repositories';
import { CalcAngleRepositoryImp } from '@/infra/knex/repositories/angles/calc-angle';
import { container } from 'tsyringe';
import { SaveAngleRepositoryImp } from '@/infra/knex/repositories/angles';

container.registerSingleton<CalcAngleRepository>(
  ServiceKeys.CALC_ANGLE,
  CalcAngleRepositoryImp
);

container.registerSingleton<SaveAngleRepository>(
  ServiceKeys.SAVE_ANGLE,
  SaveAngleRepositoryImp
);
