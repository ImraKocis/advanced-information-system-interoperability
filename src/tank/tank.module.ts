import { Module } from '@nestjs/common';
import { TankController } from './tank.controller';
import { TankService } from './tank.service';

@Module({
  providers: [TankService],
  controllers: [TankController],
})
export class TankModule {}
