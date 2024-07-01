import { Tank } from '@prisma/client';

export interface UserTanks {
  id: number;
  email: string;
  createdAt: Date;
  tanks: Tank[];
}

export interface UserTanksExtended {
  id: number;
  createdAt: Date;
  email: string;
  tanks: Tank[];
}
