import { Controller, Post, Body } from '@nestjs/common';
import { AddPlayerDto } from './PlayerDto';
import { PlayerProvider } from './index.service';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerProvider) {}

  @Post('players')
  async addPlayer(@Body() param: AddPlayerDto) {
    let id = await this.playerService.addPlayer(param);
    return id;
  }
}
