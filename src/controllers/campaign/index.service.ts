import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { CreateCampaignDto } from './campaign.dto';
import { CampaignType } from './index.types';
import { ObjectId, Mongoose } from 'mongoose';

@Injectable()
export class CampaignService {
  constructor(@InjectModel('Campaign') private campaignModel) {}

  async createCampaign(campaign: CreateCampaignDto): Promise<CampaignType> {
    const model = await new this.campaignModel(campaign);
    return model.save();
  }

  async updateStatus(id: string, status: string): Promise<string> {
    return await this.campaignModel.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
  }

  async addStatus(id: string, status: string): Promise<string> {
    const model = await this.campaignModel.findById(id);

    if (model.steps === undefined) model.steps = [];
    model.steps.push(status);
    await model.save();
    return '';
  }

  async removeStatus(id: string, status: string): Promise<string> {
    const model = await this.campaignModel.findById(id);

    model.steps = model.steps.filter((item) => item !== status);
    await model.save();
    return '';
  }
}
