import { inject, injectable } from 'tsyringe';

import { ServiceKeys } from '@/common/container/keys';
import { CalcAngleRepository } from '@/domain/repositories/calc-angle';

@injectable()
export class CalcAngleService implements CalcAngleRepository {
  constructor(
    @inject(ServiceKeys.CALC_ANGLE)
    private readonly calcAngleRepository: CalcAngleRepository,
  ) {}

  async calc(
    params: CalcAngleRepository.Params,
  ): Promise<CalcAngleRepository.Result> {
    const angle = await this.calcAngleRepository.calc(params);

    return { angle: angle };
  }
}
