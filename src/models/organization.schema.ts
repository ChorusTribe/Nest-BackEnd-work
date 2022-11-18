import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ id: true })
export class Organization {
  @Prop({ type: String })
  _id: String;

  @Prop({ type: Array })
  users: [];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
