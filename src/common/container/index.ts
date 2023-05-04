import { ServiceKeys } from './keys';
import { CalcAngleRepository, SaveAngleRepository } from '@/domain/repositories';
import { CalcAngleRepositoryImp, SaveAngleRepositoryImp } from '@/infra/knex/repositories/angles/';
import { container } from 'tsyringe';

container.registerSingleton<CalcAngleRepository>(
  ServiceKeys.CALC_ANGLE,
  CalcAngleRepositoryImp
);

container.registerSingleton<SaveAngleRepository>(
  ServiceKeys.SAVE_ANGLE,
  SaveAngleRepositoryImp
);
