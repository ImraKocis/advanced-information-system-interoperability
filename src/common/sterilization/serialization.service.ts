import { instanceToPlain } from 'class-transformer';

export class SerializationService {
  static serialize<T>(instance: T): object {
    return instanceToPlain(instance);
  }
}
