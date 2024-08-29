import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Tank } from '@prisma/client';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTankDto, UpdateTankDto } from './dto';

@Injectable()
export class TankService {
  constructor(
    @Inject('TANK_SERVICE') private rabbitClient: ClientProxy,
    private prisma: PrismaService,
  ) {}

  async create(data: CreateTankDto): Promise<Tank> {
    const newTank = await this.prisma.tank.create({
      data: {
        name: data.name,
        hitpoints: Number(data.hitpoints),
        numofcrew: Number(data.numofcrew),
        nation: data.nation ?? 'USA',
        type: data.type ?? 'HEAVY_TANK',
      },
    });

    this.rabbitClient.emit('new-tank', newTank);

    return newTank;
  }

  async getAll(): Promise<Tank[]> {
    return this.prisma.tank.findMany();
  }

  async getById(id: string): Promise<Tank> {
    try {
      const tank = await this.prisma.tank.findUnique({
        where: { id: Number(id) },
      });
      this.rabbitClient.emit('get-tank', tank);
      return tank;
    } catch {
      return null;
    }
  }

  async update(id: string, data: UpdateTankDto): Promise<Tank | null> {
    try {
      const tank = await this.prisma.tank.update({
        where: {
          id: Number(id),
        },
        data: {
          name: data.name || undefined,
          hitpoints: Number(data.hitpoints) || undefined,
          numofcrew: Number(data.numofcrew) || undefined,
          nation: data.nation || undefined,
          type: data.type || undefined,
        },
      });
      // this.rabbitClient.emit('update-tank', tank);
      return tank;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async delete(id: string): Promise<Tank | null> {
    try {
      const tank = await this.prisma.tank.delete({
        where: {
          id: Number(id),
        },
      });
      this.rabbitClient.emit('delete-tank', tank);
      return tank;
    } catch (e) {
      return null;
    }
  }

  async createMany(data: any[]): Promise<Prisma.BatchPayload> {
    return this.prisma.tank.createMany({
      data: data.map((tank) => ({
        name: tank.name,
        hitpoints: Number(tank.hitpoints),
        numofcrew: Number(tank.numofcrew),
        nation: tank.nation,
        type: tank.type,
      })),
    });
  }

  async getFirst(): Promise<Tank> {
    return this.prisma.tank.findFirst();
  }
}
