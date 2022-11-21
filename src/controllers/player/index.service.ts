import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddPlayerDto } from './PlayerDto';

@Injectable()
export class PlayerProvider {
  constructor(@InjectModel('Player') private playerModel) {}

  async addPlayer(data: AddPlayerDto) {
    const model = await new this.playerModel(data);
    await model.save();
    return model._id;
  }
}
