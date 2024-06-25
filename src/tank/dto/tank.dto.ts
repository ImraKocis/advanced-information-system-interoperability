import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { TankType } from '@prisma/client';

export class UpdateTankDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'The name of the tank',
    example: 'M1 Abrams',
  })
  name?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(3500)
  @ApiProperty({
    required: false,
    description: 'Tank hit points',
    minimum: 0,
    maximum: 3500,
    example: 1500,
  })
  hitpoints?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  @Max(6)
  @Min(1)
  @ApiProperty({
    required: false,
    description: 'Number of crew members required to operate the tank',
    maximum: 6,
    minimum: 1,
    example: 5,
  })
  numofcrew?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Tank nation',
    example:
      'Germany | USSR | USA | UK | France | China | Japan | Italy | Sweden',
  })
  nation?: string;

  @IsEnum(TankType)
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Tank type',
    example: 'LIGHT_TANK | MEDIUM_TANK | HEAVY_TANK | TANK_DESTROYER | SPG',
  })
  type?: TankType;
}

export class CreateTankDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Tank official name',
    example: 'Tiger II',
  })
  name: string;

  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  @Max(3500)
  @Min(0)
  @ApiProperty({
    required: true,
    description: 'Tank hit points',
    minimum: 0,
    maximum: 3500,
    example: 1500,
  })
  hitpoints: string;

  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  @Max(6)
  @Min(1)
  @ApiProperty({
    required: true,
    description: 'Number of crew members required to operate the tank',
    maximum: 6,
    minimum: 1,
    example: 5,
  })
  numofcrew: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Tank nation',
    example:
      'Germany | USSR | USA | UK | France | China | Japan | Italy | Sweden',
  })
  nation: string;

  @IsEnum(TankType)
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Tank type',
    example: 'LIGHT_TANK | MEDIUM_TANK | HEAVY_TANK | TANK_DESTROYER | SPG',
  })
  type: TankType;
}
