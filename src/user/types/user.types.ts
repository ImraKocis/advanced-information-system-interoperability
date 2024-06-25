import { Tank } from '@prisma/client';

export interface UserTanks {
  id: number;
  email: string;
  createdAt: Date;
  tanks: Tank[];
}
