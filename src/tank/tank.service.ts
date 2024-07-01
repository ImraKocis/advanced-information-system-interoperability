import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Tank } from '@prisma/client';
import { UpdateTankDto } from './dto';
import { TankEntity } from './entities';

@Injectable()
export class TankService {
  constructor(private prisma: PrismaService) {}

  async create(data: TankEntity): Promise<Tank> {
    return this.prisma.tank.create({
      data: {
        name: data.name,
        hitpoints: Number(data.hitpoints),
        numofcrew: Number(data.numofcrew),
        nation: data.nation,
        type: data.type,
      },
    });
  }

  async getAll(): Promise<Tank[]> {
    return this.prisma.tank.findMany();
  }

  async getById(id: string): Promise<Tank> {
    try {
      return this.prisma.tank.findUnique({
        where: { id: Number(id) },
      });
    } catch {
      return null;
    }
  }

  async update(id: string, data: UpdateTankDto): Promise<Tank | null> {
    try {
      return this.prisma.tank.update({
        where: {
          id: Number(id),
        },
        data: {
          name: data.name,
          hitpoints: Number(data.hitpoints),
          numofcrew: Number(data.numofcrew),
          nation: data.nation,
        },
      });
    } catch {
      return null;
    }
  }

  async delete(id: string): Promise<Tank | null> {
    try {
      return this.prisma.tank.delete({
        where: {
          id: Number(id),
        },
      });
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
}
