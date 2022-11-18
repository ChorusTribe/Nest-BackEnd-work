import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({ _id: true })
export class Step {
  _id: ObjectId;

  @Prop({ type: String })
  TODO: String;
}

export const PlayerSchema = SchemaFactory.createForClass(Step);
