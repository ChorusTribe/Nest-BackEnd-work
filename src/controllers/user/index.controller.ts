import { Controller, Get, Post, Body } from '@nestjs/common';

import { UserDto } from './user.dto';
import { UserService } from './index.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('users')
  async get() {
    return {};
  }

  @Post('users')
  async create(@Body() param: UserDto): Promise<string> {
    try {
      const user = await this.userService.createUser(param);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    return 'success';
  }
}
