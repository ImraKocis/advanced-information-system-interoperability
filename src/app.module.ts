import { Module } from '@nestjs/common';
import { TankModule } from './tank/tank.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TankModule,
    PrismaModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
  ],
  controllers: [],
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: AtGuard,
  //   },
  // ],
})
export class AppModule {}
