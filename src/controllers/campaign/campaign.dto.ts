import { ApiProperty } from '@nestjs/swagger';

export class CreateCampaignDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly owned_by: string;

  @ApiProperty()
  readonly steps: string[];

  @ApiProperty({ enum: ['draft', 'active', 'pause', 'ended', 'archive'] })
  readonly status: string;
}

export class UpdateStatusCampaignDto {
  @ApiProperty()
  readonly status: string;
}

export class AddStepCampaignDto {
  @ApiProperty()
  readonly step_id: string;
}

export class RemoveStepCampaignDto {
  @ApiProperty()
  readonly step_id: string;
}

export class AddPlayersCampaignDto {
  @ApiProperty()
  readonly player_ids: string[];
}
