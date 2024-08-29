import { Module } from '@nestjs/common';
import { TankController } from './tank.controller';
import { TankService } from './tank.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TANK_SERVICE',
        transport: Transport.RMQ,
        options: {
          // TODO: add the connection string -> .env
          urls: ['connection string'],
          queue: 'tank-queue',
        },
      },
    ]),
  ],
  providers: [TankService],
  controllers: [TankController],
})
export class TankModule {}
