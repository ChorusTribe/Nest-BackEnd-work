import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { OrganizationSchema, Organization } from './organization.schema';

@Schema()
export class Campaign {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: Date,
    required: true,
    default: Date.now,
  })
  created_at: Date;

  @Prop({ type: Array })
  players: [];

  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  owned_by: Organization;

  @Prop({ type: Array(MongooseSchema.Types.ObjectId), required: true })
  steps: [];

  @Prop({ type: String, required: true })
  status: any;

  @Prop({ type: Array })
  medium: [];

  @Prop({ type: Array })
  qualified: [];

  @Prop({ type: Array })
  winners: [];
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
