import { Module } from '@nestjs/common';
import { UserController } from './index.controller';
import { UserSchema } from 'src/models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

import { UserService } from './index.service';

@Module({
  controllers: [UserController],
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UserService],
})
export class UserModule {}
