import { BaseAngleRepository } from "./angle";
import { injectable } from "tsyringe";
import { SaveAngleRepository } from "@/domain/repositories";

@injectable()
export class SaveAngleRepositoryImp implements SaveAngleRepository {
  constructor(private readonly baseRepository: BaseAngleRepository) { }

  async save(params: SaveAngleRepository.Params): Promise<any> {
    const { hour, minute, angle } = params;
    await this.baseRepository.saveAngle(hour, minute, angle);

    return angle;
  }
}
