import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export interface SaveAngleRepository {
  save(
    params: SaveAngleRepository.Params,
  ): Promise<SaveAngleRepository.Result>;
}

export namespace SaveAngleRepository {
  export class Params {
    @Expose()
    @IsNotEmpty()
    hour: number;

    @Expose()
    @IsNotEmpty()
    minute: number;

    @Expose()
    @IsNotEmpty()
    angle: number;
  };

  export type Result = any ;
}
