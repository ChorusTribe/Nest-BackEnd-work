import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

@Schema({ _id: true })
export class User {
  _id: ObjectId;

  @Prop({ type: String, required: true })
  mail: String;
}

export const UserSchema = SchemaFactory.createForClass(User);
