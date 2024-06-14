import { TankType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TankEntity {
  @ApiProperty({
    example: 1,
  })
  id: number;
  @ApiProperty({
    example: new Date(),
  })
  createdAt: Date;
  @ApiProperty({
    example: new Date(),
  })
  updatedAt: Date;
  @ApiProperty({
    example: 'M1 Abrams',
  })
  name: string;
  @ApiProperty({
    example: 'USA',
  })
  nation: string;
  @ApiProperty({
    example: 1500,
  })
  hitpoints: number;
  @ApiProperty({
    example: 5,
  })
  numofcrew: number;
  @ApiProperty({
    example: 'HEAVY_TANK',
  })
  type: TankType;
}
