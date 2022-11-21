import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({ _id: true })
export class Player {
  _id: ObjectId;

  @Prop({ type: String })
  discord_id: String;

  @Prop({ type: String })
  twitter_id: String;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
