import { TankType } from '@prisma/client';

export const tanks = [
  {
    name: 'Tiger I',
    hitpoints: 1500,
    numofcrew: 5,
    nation: 'Germany',
    type: TankType.HEAVY_TANK,
  },
  {
    name: 'M4 Sherman',
    hitpoints: 1200,
    numofcrew: 5,
    nation: 'USA',
    type: TankType.MEDIUM_TANK,
  },
  {
    name: 'T-34',
    hitpoints: 1250,
    numofcrew: 4,
    nation: 'USSR',
    type: TankType.MEDIUM_TANK,
  },
  {
    name: 'Panther',
    hitpoints: 1400,
    numofcrew: 5,
    nation: 'Germany',
    type: TankType.MEDIUM_TANK,
  },
  {
    name: 'Churchill',
    hitpoints: 1600,
    numofcrew: 5,
    nation: 'UK',
    type: TankType.HEAVY_TANK,
  },
  {
    name: 'M18 Hellcat',
    hitpoints: 1100,
    numofcrew: 5,
    nation: 'USA',
    type: TankType.TANK_DESTROYER,
  },
  {
    name: 'IS-2',
    hitpoints: 1550,
    numofcrew: 4,
    nation: 'USSR',
    type: TankType.HEAVY_TANK,
  },
  {
    name: 'Cromwell',
    hitpoints: 1150,
    numofcrew: 5,
    nation: 'UK',
    type: TankType.MEDIUM_TANK,
  },
  {
    name: 'M41 Walker Bulldog',
    hitpoints: 1000,
    numofcrew: 4,
    nation: 'USA',
    type: TankType.LIGHT_TANK,
  },
  {
    name: 'Strv 103',
    hitpoints: 1300,
    numofcrew: 3,
    nation: 'Sweden',
    type: TankType.TANK_DESTROYER,
  },
];
