import { TankController } from './tank.controller';
import { TankService } from './tank.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTankDto, UpdateTankDto } from './dto';
import { TankType } from '@prisma/client';

describe('TankController', () => {
  let tankController: TankController;
  let tankService: TankService;
  let prismaService: PrismaService;

  beforeEach(() => {
    tankService = new TankService(prismaService);
    tankController = new TankController(tankService);
  });

  // Existing tests...

  it('should create a tank', async () => {
    const data: CreateTankDto = {
      name: 'Tank 1',
      hitpoints: 100,
      numofcrew: 1,
      nation: 'Nation 1',
      type: TankType.HEAVY_TANK,
    };

    const result: any = {
      id: 1,
      ...data,
    };

    jest
      .spyOn(tankService, 'create')
      .mockImplementation(() => Promise.resolve(result));

    expect(await tankController.create(data)).toBe(result);
  });

  it('should update a tank', async () => {
    const data: UpdateTankDto = {
      name: 'Tank 1',
      hitpoints: 100,
      numofcrew: 1,
      nation: 'Nation 1',
      type: TankType.HEAVY_TANK,
    };

    const result: any = {
      id: 1,
      ...data,
    };

    jest
      .spyOn(tankService, 'update')
      .mockImplementation(() => Promise.resolve(result));

    expect(await tankController.update('1', data)).toBe(result);
  });

  it('should delete a tank', async () => {
    const result: any = {
      id: 1,
      name: 'Tank 1',
      hitpoints: 100,
      numofcrew: 1,
      nation: 'Nation 1',
      type: TankType.HEAVY_TANK,
    };

    jest
      .spyOn(tankService, 'delete')
      .mockImplementation(() => Promise.resolve(result));

    expect(await tankController.delete('1')).toBe(result);
  });

  it('should get a tank by name', async () => {
    const result: any[] = [
      {
        id: 1,
        name: 'Tank 1',
        hitpoints: 100,
        numofcrew: 1,
        nation: 'Nation 1',
        type: TankType.HEAVY_TANK,
      },
    ];

    jest
      .spyOn(tankService, 'getByName')
      .mockImplementation(() => Promise.resolve(result));

    expect(await tankController.getByName('Tank 1')).toBe(result);
  });
});
