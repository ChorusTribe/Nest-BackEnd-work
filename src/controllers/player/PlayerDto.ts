import { ApiProperty } from '@nestjs/swagger';

export class AddPlayerDto {
  @ApiProperty()
  readonly discord_id: string;

  @ApiProperty()
  readonly twitter_id: string;
}
