import { Module } from '@nestjs/common';
import { CampaignController } from './index.controller';
import { CampaignService } from './index.service';
import { MongooseModule } from '@nestjs/mongoose';

import { CampaignSchema } from 'src/models/campaign.schema';

@Module({
  controllers: [CampaignController],
  providers: [CampaignService],
  imports: [
    MongooseModule.forFeature([{ name: 'Campaign', schema: CampaignSchema }]),
  ],
})
export class CampaignModule {}
