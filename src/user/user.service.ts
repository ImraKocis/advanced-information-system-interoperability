import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { UserTanks } from './types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async addTankToUser(
    userId: number,
    tankId: number,
  ): Promise<UserTanks | null> {
    try {
      return this.prisma.user.update({
        where: { id: userId },
        data: {
          tanks: {
            connect: { id: tankId },
          },
        },
        select: {
          id: true,
          email: true,
          tanks: true,
        },
      });
    } catch {
      return null;
    }
  }

  async removeTankFromUser(
    userId: number,
    tankId: number,
  ): Promise<UserTanks | null> {
    try {
      return this.prisma.user.update({
        where: { id: userId },
        data: {
          tanks: {
            disconnect: { id: tankId },
          },
        },
        select: {
          id: true,
          email: true,
          tanks: true,
        },
      });
    } catch {
      return null;
    }
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
