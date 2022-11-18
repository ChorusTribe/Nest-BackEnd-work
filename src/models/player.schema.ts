import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ id: true })
export class Player {
  @Prop({ type: String })
  _id: String;

  @Prop({ type: String })
  discord_id: String;

  @Prop({ type: String })
  twitter_id: String;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
