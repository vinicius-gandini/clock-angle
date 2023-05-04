import { inject, injectable } from 'tsyringe';

import { ServiceKeys } from '@/common/container/keys';
import { CalcAngleRepository, SaveAngleRepository } from '@/domain/repositories';

@injectable()
export class CalcAngleService {
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
    const calculedAngle = await this.calcAngleRepository.retrieve(params);

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
