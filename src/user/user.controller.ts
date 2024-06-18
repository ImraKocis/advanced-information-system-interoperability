import { Body, Controller, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../common/decorators';

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
}
