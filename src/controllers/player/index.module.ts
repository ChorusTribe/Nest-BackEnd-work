import { PlayerProvider } from './index.service';
import { Module } from '@nestjs/common';
import { PlayerController } from './index.controller';
import { PlayerSchema } from 'src/models/player.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [PlayerController],
  imports: [
    MongooseModule.forFeature([{ name: 'Player', schema: PlayerSchema }]),
  ],
  providers: [PlayerProvider],
})
export class PlayerModule {}
