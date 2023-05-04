import { CalcAngleRepository } from "@/domain/repositories";
import { BaseAngleRepository } from "./angle";
import { injectable } from "tsyringe";

@injectable()
export class CalcAngleRepositoryImp implements CalcAngleRepository {
  constructor(private readonly baseRepository: BaseAngleRepository) { }

  async retrieve(params: CalcAngleRepository.Params): Promise<any> {
    const { hour, minute } = params;
    const angle = await this.baseRepository.angleAlreadySearched(hour, minute);

    return angle;
  }
}
