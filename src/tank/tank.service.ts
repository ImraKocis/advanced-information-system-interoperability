import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Tank } from '@prisma/client';
import { CreateTankDto, UpdateTankDto } from './dto';

@Injectable()
export class TankService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTankDto): Promise<Tank> {
    return this.prisma.tank.create({
      data: {
        name: data.name,
        hitpoints: data.hitpoints,
        numofcrew: data.numofcrew,
        nation: data.nation,
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
          hitpoints: data.hitpoints,
          numofcrew: data.numofcrew,
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

  async createMany(data: CreateTankDto[]): Promise<Prisma.BatchPayload> {
    return this.prisma.tank.createMany({
      data: data.map((tank) => ({
        name: tank.name,
        hitpoints: tank.hitpoints,
        numofcrew: tank.numofcrew,
        nation: tank.nation,
        type: tank.type,
      })),
    });
  }

  // async getByName(name: string): Promise<Tank[]> {
  //   const result: Tank[] = await this.prisma.$queryRawUnsafe(
  //     `SELECT * FROM Tanks WHERE name = '${name}'`,
  //   );
  //
  //   return result;
  // }
}
