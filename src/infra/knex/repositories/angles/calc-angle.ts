import { CalcAngleRepository } from "@/domain/repositories/calc-angle";
import { BaseAngleRepository } from "./angle";
import { injectable } from "tsyringe";

@injectable()
export class CalcAngleRepositoryImp implements CalcAngleRepository {
  constructor(private readonly baseRepository: BaseAngleRepository) { }

  async calc(params: CalcAngleRepository.Params): Promise<any> {
    const { knex, table } = this.baseRepository;
    const { hour, minute } = params;
    const angle = await this.baseRepository.angleAlreadySearched(hour, minute);

    if (!angle) {
      const hourAngle = (hour % 12) * 30 + minute * 0.5;
      const minuteAngle = minute * 6;
      const angle = Math.abs(hourAngle - minuteAngle);
      const finalAngle = angle > 180 ? 360 - angle : angle;

      await knex(table).insert({ hour, minute, angle: finalAngle });

      return finalAngle;
    }

    return angle.angle;
  }
}
