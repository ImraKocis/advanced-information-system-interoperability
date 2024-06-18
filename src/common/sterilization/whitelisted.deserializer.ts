import { User } from '../../user/entities';
import { ClassConstructor } from '../types';
import { plainToClass } from 'class-transformer';

const whitelistedClasses = new Set<ClassConstructor<any>>([User]);

export function safeDeserialize<T>(
  cls: ClassConstructor<T>,
  plain: object,
): T | null {
  if (whitelistedClasses.has(cls)) {
    return plainToClass(cls, plain);
  }
  throw new Error(`Class ${cls.name} is not whitelisted for deserialization.`);
}
