import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';

import {
  CreateCampaignDto,
  UpdateStatusCampaignDto,
  AddStepCampaignDto,
  RemoveStepCampaignDto,
  AddPlayersCampaignDto,
} from './campaign.dto';
import { CampaignService } from './index.service';
import { CampaignType } from './index.types';

@Controller()
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}
  @Post('/campaign')
  async create(@Body() param: CreateCampaignDto): Promise<string> {
    try {
      const data = await this.campaignService.createCampaign(param);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return param.name;
  }

  @Put('/campaign/update_status/:id')
  async updateStatus(@Param('id') id, @Body() param: UpdateStatusCampaignDto) {
    await this.campaignService.updateStatus(id, param.status);
    return 'success';
  }

  @Put('/campaign/add_step/:id')
  async addStep(@Param('id') id, @Body() param: AddStepCampaignDto) {
    await this.campaignService.addStatus(id, param.step_id);
    return 'success';
  }

  @Put('/campaign/remove_step/:id')
  async removeStep(@Param('id') id, @Body() param: RemoveStepCampaignDto) {
    await this.campaignService.removeStatus(id, param.step_id);
    return 'success';
  }

  @Put('/campaign/add_players/:id')
  async addPlayers(@Param('id') id, @Body() param: AddPlayersCampaignDto) {
    await this.campaignService.addPlayers(id, param.player_ids);
    return 'success';
  }

  @Get('/campaign/:id')
  async get(@Param('id') id: string): Promise<CampaignType[]> {
    const result = await this.campaignService.getData(id);
    return result;
  }
}
