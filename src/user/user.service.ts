import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserTanks } from './types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async addTankToUser(
    userId: number,
    tankId: number,
  ): Promise<UserTanks | null> {
    const currentTank = await this.prisma.tank.findUnique({
      where: { id: tankId },
    });

    if (!currentTank) return null;
    // Tank is already assigned to a user
    if (currentTank.userId)
      throw new ForbiddenException('Tank already assigned');
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
          createdAt: true,
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
          createdAt: true,
        },
      });
    } catch {
      return null;
    }
  }

  async findAll(): Promise<UserTanks[]> {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        tanks: true,
        createdAt: true,
      },
    });
  }
}
