import { Tank } from '@prisma/client';

export interface UserTanks {
  id: number;
  email: string;
  tanks: Tank[];
}
