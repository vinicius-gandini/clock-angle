export type Angle = {
  id: number;
  hour: number;
  minute: number;
  angle: number;
  date: Date;
}

export enum AngleTable {
  table = 'tbl_angles',
}
