import { User } from '../../user/entities';
import { ClassConstructor } from '../types';
import { plainToInstance } from 'class-transformer';
import { TankEntity } from '../../tank/entities';

const whitelistedClasses = new Set<ClassConstructor<any>>([User, TankEntity]);

export function safeDeserialize<T>(
  cls: ClassConstructor<T>,
  plain: object,
): T | null {
  if (whitelistedClasses.has(cls)) {
    return plainToInstance(cls, plain);
  }
  throw new Error(`Class ${cls.name} is not whitelisted for deserialization.`);
}
