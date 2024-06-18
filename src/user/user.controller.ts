import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../common/decorators';
import { safeDeserialize } from '../common/sterilization';
import { User } from './entities';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post('add-tank')
  async addTankToUser(
    @Query('userId') userId: string,
    @Query('tankId') tankId: string,
  ) {
    return this.userService.addTankToUser(Number(userId), Number(tankId));
  }

  @Public()
  @Post('remove-tank')
  async removeTankFromUser(
    @Query('userId') userId: string,
    @Query('tankId') tankId: string,
  ) {
    return this.userService.removeTankFromUser(Number(userId), Number(tankId));
  }

  @Public()
  @Get()
  async findAll() {
    const users = await this.userService.findAll();
    return users.map((user) => safeDeserialize(User, user));
  }
}
