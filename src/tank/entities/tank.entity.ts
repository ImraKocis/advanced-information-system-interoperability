import { TankType } from '@prisma/client';
import { Expose, Transform } from 'class-transformer';

export class TankEntity {
  @Expose()
  id: number;

  @Expose()
  @Transform(({ value }) => value.toISOString(), { toPlainOnly: true })
  createdAt: Date;

  @Expose()
  @Transform(({ value }) => value.toISOString(), { toPlainOnly: true })
  updatedAt: Date;

  @Expose()
  name: string;

  @Expose()
  nation: string;

  @Expose()
  hitpoints: number;

  @Expose()
  numofcrew: number;

  @Expose()
  type: TankType;
}
