import { CalcAngleRepository } from "@/domain/repositories/calc-angle";
import { BaseAngleRepository } from "./angle";
import { injectable } from "tsyringe";

@injectable()
export class CalcAngleRepositoryImp implements CalcAngleRepository {
  constructor(private readonly baseRepository: BaseAngleRepository) { }

  async calc(params: CalcAngleRepository.Params): Promise<any> {
    const { hour, minute } = params;
    const angle = await this.baseRepository.angleAlreadySearched(hour, minute);

    console.log(angle);

    return angle;
  }
}
