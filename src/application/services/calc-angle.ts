import { inject, injectable } from 'tsyringe';

import { ServiceKeys } from '@/common/container/keys';
import { CalcAngleRepository } from '@/domain/repositories/calc-angle';
import { SaveAngleRepository } from '@/domain/repositories';

@injectable()
export class CalcAngleService implements CalcAngleRepository {
  constructor(
    @inject(ServiceKeys.CALC_ANGLE)
    private readonly calcAngleRepository: CalcAngleRepository,
    @inject(ServiceKeys.SAVE_ANGLE)
    private readonly saveAngleRepository: SaveAngleRepository,
  ) {}

  async calc(
    params: CalcAngleRepository.Params,
  ): Promise<CalcAngleRepository.Result> {
    const { hour, minute } = params;
    const calculedAngle = await this.calcAngleRepository.calc(params);

    if (calculedAngle) {
      return { angle: calculedAngle.angle };
    }

    const hourAngle = (hour % 12) * 30;
    const minuteAngle = minute * 6;
    const diff = Math.abs(hourAngle - minuteAngle);
    const finalAngle = Math.min(diff, 360 - diff);

    await this.saveAngleRepository.save({ hour, minute, angle: finalAngle });
    return { angle: finalAngle };
  }
}
