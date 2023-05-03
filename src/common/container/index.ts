import { ServiceKeys } from './keys';
import { CalcAngleRepository } from '@/domain/repositories';
import { CalcAngleRepositoryImp } from '@/infra/knex/repositories/angles/calc-angle';
import { container } from 'tsyringe';

container.registerSingleton<CalcAngleRepository>(
  ServiceKeys.CALC_ANGLE,
  CalcAngleRepositoryImp
);
