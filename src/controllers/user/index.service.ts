import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UserDto } from './user.dto';
import { IUser } from './index.types';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel) {}

  async createUser(createUserDto: UserDto): Promise<IUser> {
    const model = await new this.userModel(createUserDto);
    return model.save();
  }
}
