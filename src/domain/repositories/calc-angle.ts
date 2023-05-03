import { Expose } from "class-transformer";
import { Angle } from "../entities";
import { IsNotEmpty } from "class-validator";

export interface CalcAngleRepository {
  calc(
    params: CalcAngleRepository.Params,
  ): Promise<CalcAngleRepository.Result>;
}

export namespace CalcAngleRepository {
  export class Params {
    @Expose()
    @IsNotEmpty()
    hour: number;

    @Expose()
    @IsNotEmpty()
    minute: number;
  };

  export type Result = any ;
}
